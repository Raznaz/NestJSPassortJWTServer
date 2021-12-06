import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'Enter users mail' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'incorrect email' })
  readonly email: string;

  @ApiProperty({ example: '123456', description: 'Enter sequirity password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Min 4, Max 16' })
  readonly password: string;
}
