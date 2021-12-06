import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtAuthGuardShort } from 'src/auth/guards/jwt.guard';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/createUser-dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Show all users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @ApiOperation({ summary: 'Show all users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuardShort)
  @Get('test')
  getAllUsers2() {
    return this.userService.getAllUsers();
  }

  @Put(':id')
  updUserInformation(@Param('id') id: number, @Body() userDto: CreateUserDto) {
    return this.userService.updUserInfo(id, userDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: number) {
    return this.userService.removeUser(id);
  }
}
