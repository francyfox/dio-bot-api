import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { GroupModule } from './module/group/group.module';
import { BotModule } from './module/bot/bot.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { SessionModule } from './module/bot/session/session.module';
import { session } from './module/bot/session/session.middleware';
import { AdminModule } from '@adminjs/nestjs';
import * as AdminJSSequelize from '@adminjs/sequelize';
import { User } from './module/user/user.model';
import AdminJS from 'adminjs';
import { Group } from './module/group/group.model';
import { Session } from './module/bot/session/session.model';

const DEFAULT_ADMIN = {
  email: 'francyfox',
  password: '@L1nad98@',
};

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

// @ts-ignore
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MSQL_HOST_URI,
      port: Number(process.env.MSQL_PORT),
      username: process.env.MSQL_USER,
      password: process.env.MSQL_PASS,
      database: process.env.MSQL_NAME,
      models: [],
      autoLoadModels: true,
    }),
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [User, Group, Session],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret',
        },
      }),
    }),
    TelegrafModule.forRoot({
      middlewares: [session()],
      token: process.env.TELEGRAM_API_KEY ?? '',
    }),
    GroupModule,
    UserModule,
    BotModule,
    SessionModule,
  ],
})
export class AppModule {}
