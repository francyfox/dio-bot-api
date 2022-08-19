import { Injectable } from '@nestjs/common';
import { Group } from './group.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService {
  constructor(@InjectModel(Group) private GroupRepository: typeof Group) {}

  async createGroup(dto: CreateGroupDto) {
    // @ts-ignore
    return await this.GroupRepository.create(dto);
  }

  async getGroupByValue(value: string) {
    return await this.GroupRepository.findOne({
      rejectOnEmpty: Number.isNaN(value),
      where: { value },
    });
  }

  async getAllGroups() {
    return await this.GroupRepository.findAll();
  }
}
