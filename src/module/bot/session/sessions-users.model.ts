import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Session } from './session.model';
import { User } from '../../user/user.model';

@Table({ tableName: 'sessions_users', createdAt: false, updatedAt: false })
export class SessionsUsers extends Model<SessionsUsers> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Session)
  @Column({ type: DataType.INTEGER })
  sessionId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
}
