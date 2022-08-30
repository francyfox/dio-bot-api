import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Session } from './session.model';
import { CreateSessionDto } from './dto/create-session.dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session) private SessionRepository: typeof Session,
  ) {}

  async createSession(dto: CreateSessionDto) {
    await this.SessionRepository.create(dto);
  }

  async getAllSessions() {
    return await this.SessionRepository.findAll();
  }

  // async getSessionById(id: number) {
  //   return await this.SessionRepository.findOne({
  //     rejectOnEmpty: Number.isNaN(id),
  //     where: { id },
  //   });
  // }

  async getSessionByMessage(value: string) {
    return await this.SessionRepository.findOne({
      rejectOnEmpty: Number.isNaN(value),
      where: { value },
    });
  }
}
