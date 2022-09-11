import { ApiProperty } from '@nestjs/swagger';

export class MessageToGroup {
  @ApiProperty({ example: 'Simple text', description: 'Текст сообщения' })
  readonly message: string;
}
