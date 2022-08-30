import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SessionService } from './session.service';
import { Session } from './session.model';

@Controller('session')
@ApiTags('Session')
export class SessionController {
  constructor(private sessionService: SessionService) {}
  @ApiOperation({ summary: 'Получение всех сессий' })
  @ApiResponse({ status: 200, type: [Session] })
  @Get()
  getAll() {
    return this.sessionService.getAllSessions();
  }
}
