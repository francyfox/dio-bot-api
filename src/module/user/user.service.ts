import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private UserRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return await this.UserRepository.create(dto);
  }

  async getAllUsers() {
    return await this.UserRepository.findAll();
  }
}
