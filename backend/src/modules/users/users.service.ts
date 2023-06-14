import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    return user

  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
