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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forFeature([User]),
    GroupModule,
    UserModule,
  ],
  controllers: [BotController],
  providers: [BotUpdate, SceneToken, SceneIntro, UserModule, UserService],
})
export class BotModule {}
