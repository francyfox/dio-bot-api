import { Injectable } from '@nestjs/common';
import { Group } from './group.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupService {
  constructor(@InjectModel(Group) private GroupRepository: typeof Group) {}

  async createUser(dto: CreateGroupDto) {
    // @ts-ignore
    return await this.GroupRepository.create(dto);
  }

  async getAllUsers() {
    return await this.GroupRepository.findAll();
  }
}
