import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { GroupService } from '../group/group.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private UserRepository: typeof User,
    private groupService: GroupService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.UserRepository.create(dto);
    const group = await this.groupService.getGroupByValue('USER');

    if (group.id === null) {
      throw new NotFoundException(
        'Для создания пользователя необходимо создать дефолтную группу USER',
      );
    }
    await user.$set('groups', [group.id]);
    return user;
  }

  async getAllUsers() {
    return await this.UserRepository.findAll({ include: { all: true } });
  }

  async getUserByToken(token: string) {
    return await this.UserRepository.findOne({
      where: { token },
    });
  }

  async updateUser(replace: object, find: object) {
    // @ts-ignore
    return await this.UserRepository.update(replace, find);
  }
}
