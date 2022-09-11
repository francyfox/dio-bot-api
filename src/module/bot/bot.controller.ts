import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { BotService } from './bot.service';
import { MessageToGroup } from './dto/message-dto';

@Controller('bot')
@ApiTags('Bot')
export class BotController {
  constructor(private botService: BotService) {}

  @ApiOperation({ summary: 'Отправить сообщение всем пользователям в группе' })
  @ApiQuery({ name: 'value', description: 'Значение группы', example: 'USER' })
  @Post('group/:value')
  async sendMsgToGroup(
    @Query('value') value: string,
    @Body() dto: MessageToGroup,
  ) {
    return await this.botService.msgToGroup(value, dto.message);
  }
}
