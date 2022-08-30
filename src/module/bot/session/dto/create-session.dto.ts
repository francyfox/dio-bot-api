import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
  @ApiProperty({ example: '1', description: 'Session ID' })
  sessionId: string;
  @ApiProperty({ example: '1', description: 'Данные' })
  data: string;
}
