import { Wizard, WizardStep } from 'nestjs-telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';
import { WizardContext } from 'telegraf/typings/scenes';
import { actionButtons } from '../bot.buttons';

@Wizard('GET_TOKEN')
export default class SceneToken {
  confirm: boolean;

  @WizardStep(1)
  async enter(ctx: WizardContext) {
    await ctx.reply('Введите токен');
    return ctx.wizard.next();
  }

  @WizardStep(2)
  async getToken(ctx: WizardContext) {
    const message = ctx.message as Message.TextMessage;
    if (!message.text) {
      await ctx.reply(`Пусто`);
    } else {
      await ctx.reply(`MSG: ${message.text}`);
      ctx.wizard.next();
    }
  }

  @WizardStep(3)
  async leave(ctx: WizardContext) {
    await ctx.reply('Бот привязан', actionButtons());
  }
}
