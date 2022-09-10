import { Injectable } from '@nestjs/common';
import { Group } from './group.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupDto } from './dto/create-group.dto';
import { User } from '../user/user.model';

@Injectable()
export class GroupService {
  constructor(@InjectModel(Group) private GroupRepository: typeof Group) {}

  async createGroup(dto: CreateGroupDto) {
    return await this.GroupRepository.create(dto);
  }

  async getGroupByValue(value: string | number) {
    return await this.GroupRepository.findOne({
      rejectOnEmpty: Number.isNaN(value),
      where: { value },
    });
  }

  async getGroupsByValue(value: string | number) {
    return await this.GroupRepository.findAll({
      include: [
        {
          all: true,
          attributes: { exclude: ['createdAt', 'updatedAt', 'UserGroups'] },
        },
      ],
      where: { value },
    });
  }

  async getAllGroups() {
    return await this.GroupRepository.findAll();
  }
}
