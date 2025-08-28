import { Test, TestingModule } from '@nestjs/testing';
import { NestjsBatchController } from './nestjs-batch.controller';
import { NestjsBatchService } from './nestjs-batch.service';

describe('NestjsBatchController', () => {
  let nestjsBatchController: NestjsBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestjsBatchController],
      providers: [NestjsBatchService],
    }).compile();

    nestjsBatchController = app.get<NestjsBatchController>(NestjsBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestjsBatchController.getHello()).toBe('Hello World!');
    });
  });
});
