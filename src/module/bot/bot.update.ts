import { Hears, InjectBot, Start, TELEGRAF_STAGE, Update } from 'nestjs-telegraf';
import { Telegraf, Scenes } from 'telegraf';
import { Context } from './session/session.context';
import { BotService } from './bot.service';
import { actionButtons } from './bot.buttons';
import { Commands } from './bot.cmd';
import SceneToken from './scenes/scene.token';
import { Inject } from '@nestjs/common';

@Update()
export class BotUpdate {
  constructor(
    @Inject(TELEGRAF_STAGE) private readonly stage: Scenes.Stage<Context>,
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly botService: BotService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Вас приветствует телеграм служба - DioBot');
    await ctx.reply('Что вы хотите сделать?', actionButtons());
  }

  @Hears(Commands.connect)
  async startTokenScene(ctx: Context) {
    ctx.scene.enter('GET_TOKEN');
  }
}
