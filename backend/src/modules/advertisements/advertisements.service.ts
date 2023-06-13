import { Injectable } from '@nestjs/common';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { AdvertisementsRepository } from './repositories/advertisements.repository';
import { Advertisement } from './entities/advertisement.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AdvertisementsService {
  constructor(private advertisementRepository: AdvertisementsRepository) {}
  async create(createAdvertisementDto: CreateAdvertisementDto, user_id: number) {
    const advertisement = await this.advertisementRepository.create(createAdvertisementDto, user_id)
    return advertisement
  }

  async findAll(user_id: number) {
    const advertisements: Advertisement[] = await this.advertisementRepository.findAll(user_id);
    return advertisements
  }

  async findOne(id: number) {
    const advertisement: Advertisement = await this.advertisementRepository.findOne(id)
    if (!advertisement) throw new NotFoundException('advertisement not found')
    return advertisement
  }

  async update(id: number, updateAdvertisementDto: UpdateAdvertisementDto) {
    await this.findOne(id)
    const advertisement: Advertisement = await this.advertisementRepository.update(id, updateAdvertisementDto)
    return advertisement
  }

  async remove(id: number) {
    await this.findOne(id)
    await this.advertisementRepository.delete(id)
  }
}
