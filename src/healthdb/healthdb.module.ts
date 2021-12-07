import { Module } from '@nestjs/common';
import { HealthdbController } from './healthdb.controller';
import { HealthdbService } from './healthdb.service';

@Module({
  controllers: [HealthdbController],
  providers: [HealthdbService]
})
export class HealthdbModule {}
