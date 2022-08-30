import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface SessionCreateAttrs {
  sessionId: string;
  data: string;
}

@Table({ tableName: 'sessions' })
export class Session extends Model<Session, SessionCreateAttrs> {
  @ApiProperty({ example: '1', description: 'Session ID' })
  @Column({
    type: DataType.CHAR,
    allowNull: false,
    unique: true,
    primaryKey: true,
  })
  sessionId: string;

  @ApiProperty({ example: 'fox', description: 'Данные' })
  @Column({ type: DataType.TEXT })
  data: string;
}
