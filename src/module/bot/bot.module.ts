import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { BotUpdate } from './bot.update';
import { BotService } from './bot.service';
import { ConfigModule } from '@nestjs/config';

const session = new LocalSession({ database: 'session_db.json' });

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
})
export class BotModule {}
