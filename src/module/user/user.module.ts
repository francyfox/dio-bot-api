import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Group } from '../group/group.model';
import { UserGroups } from '../group/user-groups.model';
import { GroupModule } from '../group/group.module';
import { SessionsUsers } from '../bot/session/sessions-users.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Group, UserGroups, SessionsUsers]),
    GroupModule,
  ],
})
export class UserModule {}
