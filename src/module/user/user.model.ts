import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

interface UserCreationAttrs {
  username: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'fox', description: 'Имя пользователя' })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  username: string;

  @ApiProperty({ example: 'test@mail.com', description: 'Почта' })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  email: string;

  @ApiProperty({ example: 'P@$$w0rd', description: 'Пароль' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: '0001', description: 'ID чата в Telegram' })
  @Column({ type: DataType.INTEGER, unique: true })
  chatId: number;

  // @ApiProperty({ example: '[1, 2]', description: 'ID групп (Many to One)' })
  // @Column({ type: DataType.ARRAY(DataType.DECIMAL), allowNull: false })
  // groupId: Array<number>;
}
