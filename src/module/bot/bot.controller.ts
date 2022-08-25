import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SceneContext } from 'telegraf/typings/scenes';
import { Ctx } from 'nestjs-telegraf';

@Controller('bot')
@ApiTags('Bot')
export class BotController {
  // @ApiOperation({ summary: 'Получение данных сессии' })
  // @Get()
  // async getSession(@Ctx() ctx: SceneContext) {
  // }
}
