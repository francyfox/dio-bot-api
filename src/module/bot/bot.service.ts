import { Injectable } from '@nestjs/common';
import { Group } from '../group/group.model';
import { GroupService } from '../group/group.service';
import { Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  constructor(private groupService: GroupService) {}
  async msgToGroup(value: string, msg: string) {
    const bot: Telegraf = new Telegraf(process.env.TELEGRAM_API_TOKEN ?? '');
    await bot.telegram.sendMessage('868076136:868076136', 'testss');
    const groups: Group[] = await this.groupService.getGroupsByValue(value);
    return groups;
  }
}
