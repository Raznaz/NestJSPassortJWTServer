import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HealthdbService } from './healthdb.service';

@Controller('healthdb')
export class HealthdbController {
  constructor(private readonly healthDBService: HealthdbService) {}

  @ApiOperation({ summary: 'Show status BD connection' })
  @ApiResponse({ status: 200 })
  @Get()
  async checkDB() {
    return this.healthDBService.checkDB();
  }
}
