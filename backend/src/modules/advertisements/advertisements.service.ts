import { Injectable } from '@nestjs/common';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { AdvertisementsRepository } from './repositories/advertisements.repository';
import { Advertisement } from './entities/advertisement.entity';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AdvertisementsService {
  constructor(private advertisementRepository: AdvertisementsRepository) {}
  async create(createAdvertisementDto: CreateAdvertisementDto, user_id: number) {
    const advertisement = await this.advertisementRepository.create(createAdvertisementDto, user_id)
    return advertisement
  }

  async findAll() {
    const advertisements: Advertisement[] = await this.advertisementRepository.findAll();
    return advertisements
  }

  async findOne(id: number) {
    const advertisement: Advertisement = await this.advertisementRepository.findOne(id)
    if (!advertisement) throw new NotFoundException('advertisement not found')
    return advertisement
  }

  async findManyByUserId(id: number) {
    const advertisements: Advertisement[] = await this.advertisementRepository.findManyByUserId(id)
    if (!advertisements) throw new NotFoundException('user has no advertisements')
    return advertisements
  }

  async update(id: number, updateAdvertisementDto: UpdateAdvertisementDto, user_id) {
    const advertisement = await this.findOne(id)
    if(user_id != advertisement.user_id){
      throw new UnauthorizedException("insufficient permission")
    }
    const newAdvertisement: Advertisement = await this.advertisementRepository.update(id, updateAdvertisementDto)
    return newAdvertisement
  }

  async remove(id: number, user_id) {
    const advertisement = await this.findOne(id)
    if(user_id != advertisement.user_id){
      throw new UnauthorizedException("insufficient permission")
    }
    await this.advertisementRepository.delete(id)
  }
}
