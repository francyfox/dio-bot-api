import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotUpdate } from './bot.update';
import { BotService } from './bot.service';
import { ConfigModule } from '@nestjs/config';
import { BotController } from './bot.controller';

@Module({
  providers: [BotService, BotUpdate],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TelegrafModule.forRoot({
      middlewares: [session.middleware()],
      token: process.env.TELEGRAM_API_TOKEN ?? '',
    }),
  ],
  controllers: [BotController],
})
export class BotModule {}
