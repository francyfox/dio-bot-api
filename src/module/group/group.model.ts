import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user/user.model';
import { UserGroups } from './user-groups.model';

export interface GroupCreationAttrs {
  groupName: string;
  value: string;
}

@Table({ tableName: 'groups' })
export class Group extends Model<Group, GroupCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Разработчики', description: 'Название группы' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  groupName: string;

  @ApiProperty({
    example: 'DEV',
    description: 'Значение группы пользователей (Users to Groups)',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @BelongsToMany(() => User, () => UserGroups)
  users: User[];
}
