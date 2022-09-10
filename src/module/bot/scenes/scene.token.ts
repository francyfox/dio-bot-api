import { Message } from 'telegraf/typings/core/types/typegram';
import { Hears, On, Wizard, WizardStep } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/typings/scenes';
import { actionButtons, exitButton } from '../bot.buttons';
import { validateToken } from '../../../validation/bot/bot.message';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.model';
import { Commands } from '../bot.cmd';
import { Context } from '../session/session.context';
import { SessionService } from '../session/session.service';

@Wizard('GET_TOKEN')
export default class SceneToken {
  constructor(
    private usersService: UserService,
    private sessionService: SessionService,
  ) {}

  @WizardStep(1)
  async enter(ctx: WizardContext) {
    await ctx.reply('Введите токен', exitButton());
    await ctx.wizard.next();
  }

  @On('text')
  @WizardStep(2)
  async getToken(ctx: WizardContext) {
    const message = ctx.message as Message.TextMessage;
    // @ts-ignore
    const sessionId = `${ctx.from.id}:${ctx.from.id}`;
    if (validateToken(message.text)) {
      const user: User | null = await this.usersService.getUserByToken(
        message.text,
      );
      if (user !== null) {
        await this.usersService.updateUser(
          { confirm: true },
          { where: { id: user.getDataValue('id') } },
        );
        // @ts-ignore
        await user.$set('sessions', [sessionId]);
        await ctx.replyWithHTML(
          `✅ <i>Бот привязан к пользователю</i>: <b>${user.getDataValue(
            'username',
          )}</b>`,
          actionButtons(),
        );
        await ctx.scene.enter('INTRO');
      } else {
        await ctx.reply(
          '🚫 Данный токен не найден в базе пользователей',
          exitButton(),
        );
      }
    } else {
      await ctx.replyWithHTML(
        '🚫 <i>Неверный токен! Токен содержит 20 символов.</i> <b>Пример: "t_RRVjlrvcGzdFjgPcie"</b>',
        exitButton(),
      );
    }
  }

  @Hears(Commands.back)
  async back(ctx: Context) {
    await ctx.scene.enter('INTRO');
  }
}
