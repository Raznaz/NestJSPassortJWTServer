import { Test, TestingModule } from '@nestjs/testing';
import { HealthdbService } from './healthdb.service';

describe('HealthdbService', () => {
  let service: HealthdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthdbService],
    }).compile();

    service = module.get<HealthdbService>(HealthdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
