import { Controller, Get } from '@nestjs/common';
import { NestjsBatchService } from './nestjs-batch.service';

@Controller()
export class NestjsBatchController {
  constructor(private readonly nestjsBatchService: NestjsBatchService) {}

  @Get()
  getHello(): string {
    return this.nestjsBatchService.getHello();
  }
}
