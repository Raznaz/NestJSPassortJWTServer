import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'Enter users mail' })
  readonly email: string;

  @ApiProperty({ example: '123456', description: 'Enter sequirity password' })
  readonly password: string;
}
