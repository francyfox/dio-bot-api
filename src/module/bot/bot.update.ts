import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { BotService } from './bot.service';
import { actionButtons } from './bot.buttons';

@Update()
@ApiTags('Group')
export class BotUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly botService: BotService,
  ) {}

  @ApiOperation({ summary: 'Старт бота' })
  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Вас приветствует телеграм служба - DioBot');
    await ctx.reply('Что вы хотите сделать?', actionButtons());
  }
}
