import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { User } from './module/user/user.model';
import { Group } from './module/group/group.model';
import { UserGroups } from './module/group/user-groups.model';
import { GroupModule } from './module/group/group.module';
import { BotModule } from './module/bot/bot.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { SessionModule } from './module/bot/session/session.module';
import { session } from './module/bot/session/session.middleware';

// @ts-ignore
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [],
      autoLoadModels: true,
    }),
    TelegrafModule.forRoot({
      middlewares: [session()],
      token: process.env.TELEGRAM_API_TOKEN ?? '',
    }),
    GroupModule,
    UserModule,
    BotModule,
    SessionModule,
  ],
})
export class AppModule {}
