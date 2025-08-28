import { Module } from '@nestjs/common';
import { NestjsBatchController } from './nestjs-batch.controller';
import { NestjsBatchService } from './nestjs-batch.service';

@Module({
  imports: [],
  controllers: [NestjsBatchController],
  providers: [NestjsBatchService],
})
export class NestjsBatchModule {}
