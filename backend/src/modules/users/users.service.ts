import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByEmail(
      createUserDto.email,
    );

    if (findUser) {
      throw new ConflictException('Email already exists');
    }

    const user = await this.userRepository.create(createUserDto)
    
    console.log(user)

    return user
  }

  async findAll() {
    const users = await this.userRepository.findAll()
    return users
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id)
    return user
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email)
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.update(id, updateUserDto)
    return user
  }

  async remove(id: number) {
    await this.userRepository.delete(id)
    return
  }
}
