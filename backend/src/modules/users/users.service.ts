import { Injectable, ConflictException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { AddressRepository } from '../adresses/repositories/address.repository';
import { randomUUID } from 'node:crypto';
import { MailService } from 'src/utils/mail.service';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UsersRepository,
    private addressRepository: AddressRepository,
    private mailService: MailService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByEmail(
      createUserDto.email,
    )
    if (findUser) {
      throw new ConflictException('Email already exists');
    }
    const user = await this.userRepository.create(createUserDto)

    const addressData = {
      zip_code: createUserDto.zip_code,
      state: createUserDto.state,
      city: createUserDto.city,
      street: createUserDto.street,
      number: createUserDto.number,
      complement: createUserDto.complement,
      user_id: user.id,
    }

    await this.addressRepository.create(addressData)

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

  async update(id: number, updateUserDto: UpdateUserDto, authId: string) {
    if(+authId !== id){
      throw new UnauthorizedException("insufficient permission") 
    }

    const userAuth = await this.userRepository.findOne(+authId)

    if(updateUserDto.email){
      const findUser = await this.userRepository.findByEmail(
        updateUserDto.email,
      )
      if(findUser && userAuth.email !== updateUserDto.email){
        throw new ConflictException("Email already exists")
      }
    }

    const user = await this.userRepository.update(id, updateUserDto, authId)

    return user
  }

  async remove(id: number, idAuth: string) {
    if(+idAuth !== id){
      throw new UnauthorizedException("insufficient permission") 
    }
    const user = await this.userRepository.findOne(id)
    if(!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.delete(id)
    return
  }

  async sendEmailResetPassword(email: string) {
    const findUser = await this.userRepository.findByEmail(email)

    if(!findUser){
      throw new NotFoundException("User not found!")
    }

    const resetToken = randomUUID()

    await this.userRepository.updateToken(email, resetToken)

    const resetPasswordTempalte = this.mailService.resetPasswordTempalte(email, findUser.name, resetToken)

    await this.mailService.sendEmail(resetPasswordTempalte)
  }

  async resetPassword(password: string, reset_token: string) {
    const findUser = await this.userRepository.findByToken(reset_token)

    if(!findUser){
      throw new NotFoundException("User not found!")
    }

    await this.userRepository.updatePassword(findUser.id, password)
  }
}