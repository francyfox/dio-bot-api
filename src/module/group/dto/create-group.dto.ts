import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({ example: 'fox', description: 'Имя пользователя' })
  readonly username: string;
  @ApiProperty({ example: 'P@$$w0rd', description: 'Пароль' })
  readonly password: string;
  @ApiProperty({ example: '[1, 2]', description: 'ID групп (Many to One)' })
  readonly chatId: Array<number>;
}
