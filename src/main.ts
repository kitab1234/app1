import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
