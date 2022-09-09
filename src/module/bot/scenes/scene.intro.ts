import { Wizard, WizardStep } from 'nestjs-telegraf';
import { actionButtons } from '../bot.buttons';
import { WizardContext } from 'telegraf/typings/scenes';

@Wizard('INTRO')
export default class SceneIntro {
  @WizardStep(1)
  async start(ctx: WizardContext) {
    await ctx.reply('Вас приветствует телеграм служба - DioBot');
    await ctx.reply('Что вы хотите сделать?', actionButtons());
    await ctx.scene.leave();
  }
}
