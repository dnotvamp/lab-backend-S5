import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';  // Import express
import * as path from 'path';  // Import path untuk mengelola direktori

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  
  app.enableCors({
    origin: 'http://localhost:3000', // URL frontend
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });

  // Menyajikan file statis dari folder 'socket'
  app.use('/socket', express.static(path.join(__dirname, '../socket')));

  const config = new DocumentBuilder()
    .setTitle('LAB BACKEND')
    .setDescription('MUH.FADHIL AHMAD')
    .setVersion('0.1')
    .addTag('Kelas C')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
