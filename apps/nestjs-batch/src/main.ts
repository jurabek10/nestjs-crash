import { NestFactory } from '@nestjs/core';
import { NestjsBatchModule } from './nestjs-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(NestjsBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
