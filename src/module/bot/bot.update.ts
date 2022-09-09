import {
  Hears,
  InjectBot,
  Start,
  TELEGRAF_STAGE,
  Update,
} from 'nestjs-telegraf';
import { Telegraf, Scenes } from 'telegraf';
import { Context } from './session/session.context';
import { Commands } from './bot.cmd';
import { Inject } from '@nestjs/common';

@Update()
export class BotUpdate {
  constructor(
    @Inject(TELEGRAF_STAGE) private readonly stage: Scenes.Stage<Context>,
    @InjectBot() private readonly bot: Telegraf<Context>,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.scene.enter('INTRO');
  }

  @Hears(Commands.connect)
  async startTokenScene(ctx: Context) {
    await ctx.scene.enter('GET_TOKEN');
  }
}
