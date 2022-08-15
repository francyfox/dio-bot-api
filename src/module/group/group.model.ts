import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

export interface GroupCreationAttrs {
  groupName: string;
  // groupId: Array<number>;
}

@Table({ tableName: 'users' })
export class Group extends Model<Group, GroupCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный ID' })
  // @ts-ignore
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncerement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Developers', description: 'Название группы' })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  groupName: string;

  // @ApiProperty({
  //   example: '[1, 2]',
  //   description: 'ID пользователей в группе (Many to One)',
  // })
  // @Column({ type: DataType.ARRAY(DataType.DECIMAL), allowNull: false })
  // groupId: Array<number>;
}
