import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { MessageService } from './module/message/message.service';
import { MessageModule } from './module/message/message.module';
import { User } from './module/user/user.model';
import { Group } from './module/group/group.model';
import { GroupModule } from './module/group/group.module';
import { UserService } from './module/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [
        User,
        // Group,
      ],
      autoLoadModels: true,
    }),
    // GroupModule,
    UserModule,
    MessageModule,
  ],
})
export class AppModule {}
