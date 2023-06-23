import { Injectable } from '@nestjs/common';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { AddressRepository } from './repositories/address.repository';

@Injectable()
export class AdressesService {
  constructor(
    private addressRepository: AddressRepository,
  ) {}

  create(createAdressDto: CreateAdressDto) {
    return 'This action adds a new adress';
  }

  findAll() {
    return `This action returns all adresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adress`;
  }

  async update(user_id: string, updateAdressDto: UpdateAdressDto) {
    const address = await this.addressRepository.update(+user_id, updateAdressDto)

    return address
  }

  remove(id: number) {
    return `This action removes a #${id} adress`;
  }
}
