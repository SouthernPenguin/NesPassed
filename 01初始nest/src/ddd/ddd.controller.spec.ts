import { Test, TestingModule } from '@nestjs/testing';
import { DddController } from './ddd.controller';

describe('DddController', () => {
  let controller: DddController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DddController],
    }).compile();

    controller = module.get<DddController>(DddController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
