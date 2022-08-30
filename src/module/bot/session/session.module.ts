import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Session } from './session.model';

@Module({
  controllers: [SessionController],
  providers: [SessionService],
  imports: [SequelizeModule.forFeature([Session])],
})
export class SessionModule {}
