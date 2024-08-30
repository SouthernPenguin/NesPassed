import { Test, TestingModule } from '@nestjs/testing';
import { GggController } from './ggg.controller';

describe('GggController', () => {
  let controller: GggController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GggController],
    }).compile();

    controller = module.get<GggController>(GggController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
