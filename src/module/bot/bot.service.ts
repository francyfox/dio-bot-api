import { Injectable } from '@nestjs/common';
import { Group } from '../group/group.model';
import { GroupService } from '../group/group.service';
import { Telegraf } from 'telegraf';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Session } from './session/session.model';

@Injectable()
export class BotService {
  constructor(
    private groupService: GroupService,
    private userService: UserService,
  ) {}
  async msgToGroup(value: string, msg: string) {
    const groups: Group[] = await this.groupService.getGroupsByValue(value);
    const confirmedUsersId: Array<number> = [];

    [...groups].forEach((group: Group) => {
      const users: User[] = group.getDataValue('users');
      users.forEach((user: User) => {
        const isConfirm = user.getDataValue('confirm');
        if (isConfirm) {
          confirmedUsersId.push(user.getDataValue('id'));
        }
      });
    });

    for (const id of confirmedUsersId) {
      const user: User | null = await this.userService.getUserByID(id);
      const sessions: Session[] | undefined = user?.getDataValue('sessions');

      if (sessions !== undefined) {
        for (const session of sessions) {
          const chatID = session.getDataValue('sessionId');
          const bot: Telegraf = new Telegraf(
            process.env.TELEGRAM_API_TOKEN ?? '',
          );

          return await bot.telegram.sendMessage(chatID, msg);
        }
      }
    }
  }
}
