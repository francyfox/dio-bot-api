import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreationAttrs {
  username: string;
  password: string;
  chatId: number;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  // @ts-ignore
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncerement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  username: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.INTEGER, unique: true })
  chatId: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  groupId: number;
}
