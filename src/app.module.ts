import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { User } from './module/user/user.model';
import { Group } from './module/group/group.model';
import { UserGroups } from './module/group/user-groups.model';
import { GroupModule } from './module/group/group.module';
import { BotModule } from './module/bot/bot.module';
import { SessionController } from './module/session/session.controller';
import { SessionModule } from './module/session/session.module';

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
      models: [User, Group, UserGroups],
      autoLoadModels: true,
    }),
    GroupModule,
    UserModule,
    BotModule,
    SessionModule,
  ],
  controllers: [SessionController],
})
export class AppModule {}
