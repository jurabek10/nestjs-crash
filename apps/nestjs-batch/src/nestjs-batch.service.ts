import { Injectable } from '@nestjs/common';

@Injectable()
export class NestjsBatchService {
  getHello(): string {
    return 'Hello World!';
  }
}
