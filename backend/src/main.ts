import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
    new ValidationPipe({ transform: true, transformOptions: { groups: [ "pass" ] } })
  )

  const config = new DocumentBuilder()
    .setTitle('Kars Api')
    .setDescription('Documentation on how to use each route of Kars Api and its responses')
    .setVersion('0.1')
    .addTag('kars')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
