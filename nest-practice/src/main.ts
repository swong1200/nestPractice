import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

/*
Connect to MongoDB 
Follow the video to create your mongoDB account, cluster and database. Install Mongoose in 
your NestJS project. 
1.  Configure the database connection  
2.  Create schema for Todo and import the model  */
