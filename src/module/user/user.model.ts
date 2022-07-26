import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Group } from '../group/group.model';
import { UserGroups } from '../group/user-groups.model';
import { randomAsciiString } from '../../helper';
import { SessionsUsers } from '../bot/session/sessions-users.model';
import { Session } from '../bot/session/session.model';

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

  @ApiProperty({ example: 'true', description: 'Статус регистрации' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  confirm: boolean;

  @ApiProperty({
    example: randomAsciiString(20, 't_'),
    description: 'Токен',
  })
  @Column({ type: DataType.STRING, unique: true })
  token: string = randomAsciiString(20, 't_');

  @BelongsToMany(() => Session, () => SessionsUsers)
  sessions: Session[];

  @BelongsToMany(() => Group, () => UserGroups)
  groups: Group[];
}
