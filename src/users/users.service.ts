import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/createUser-dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const newUser = await this.userRepository.create(dto);
    return newUser;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async updUserInfo(id: number, dto) {
    await this.userRepository.update(dto, { where: { id } });
    const updUser = this.userRepository.findOne({ where: { id } });
    return updUser;
  }

  async removeUser(id) {
    const removedUser = await this.userRepository.findOne({ where: { id } });
    await removedUser.destroy();
    return removedUser;
  }
}
