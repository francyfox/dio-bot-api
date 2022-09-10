import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BotService } from './bot.service';

@Controller('bot')
@ApiTags('Bot')
export class BotController {
  constructor(private botService: BotService) {}

  @ApiOperation({ summary: 'Отправить сообщение всем пользователям в группе' })
  @Get('group/:value')
  async sendMsgToGroup(@Param('value') value: string) {
    return await this.botService.msgToGroup(value, '');
  }
}
