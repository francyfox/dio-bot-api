import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DIO } from './bootstrap';

async function serverStart() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dio Bot Api')
    .setDescription('Это сервис для взаимодействия с телеграм ботом.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT: string | number = Number(process.env.APP_PORT) || 3000;

  await app.listen(PORT, () => {
    console.log(DIO.colors.alert, `[DIO] - Server start on port ${PORT}`);
  });
}

serverStart();
