import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DIO } from './bootstrap';

async function serverStart() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dio Bot Api')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT: string | number = Number(process.env.PORT) || 3000;

  await app.listen(PORT, () => {
    console.log(DIO.colors.alert, `[DIO] - Server start on port ${PORT}`);
  });
}

serverStart();
