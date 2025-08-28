import { Module } from '@nestjs/common';
import { NestjsBatchController } from './nestjs-batch.controller';
import { NestjsBatchService } from './nestjs-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [NestjsBatchController],
  providers: [NestjsBatchService],
})
export class NestjsBatchModule {}
