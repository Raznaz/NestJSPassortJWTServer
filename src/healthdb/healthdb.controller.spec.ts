import { Test, TestingModule } from '@nestjs/testing';
import { HealthdbController } from './healthdb.controller';

describe('HealthdbController', () => {
  let controller: HealthdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthdbController],
    }).compile();

    controller = module.get<HealthdbController>(HealthdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
