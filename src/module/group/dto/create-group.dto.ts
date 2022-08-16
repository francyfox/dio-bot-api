import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({ example: 'Разработчики', description: 'Название группы' })
  readonly groupName: string;
  @ApiProperty({
    example: 'DEV',
    description: 'Значение группы пользователей (Users to Groups)',
  })
  readonly value: string;
}
