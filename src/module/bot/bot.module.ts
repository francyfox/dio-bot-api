import { Module } from '@nestjs/common';
import { BotUpdate } from './bot.update';
import { ConfigModule } from '@nestjs/config';
import { BotController } from './bot.controller';
import SceneToken from './scenes/scene.token';
import SceneIntro from './scenes/scene.intro';
import { UserModule } from '../user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { GroupModule } from '../group/group.module';
import { UserService } from '../user/user.service';
import { BotService } from './bot.service';
import { SessionService } from './session/session.service';
import { SessionModule } from './session/session.module';
import { Session } from './session/session.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forFeature([User, Session]),
    GroupModule,
    UserModule,
    SessionModule,
  ],
  controllers: [BotController],
  providers: [
    BotUpdate,
    SceneToken,
    SceneIntro,
    UserModule,
    UserService,
    BotService,
    SessionModule,
    SessionService,
  ],
})
export class BotModule {}
