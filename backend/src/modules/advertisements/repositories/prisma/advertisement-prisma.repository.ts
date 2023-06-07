import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/database/prisma.service"
import { AdvertisementsRepository } from "../advertisements.repository"
import { CreateAdvertisementDto } from "../../dto/create-advertisement.dto"
import { Advertisement } from "../../entities/advertisement.entity"
import { UpdateAdvertisementDto } from "../../dto/update-advertisement.dto"

@Injectable()
export class AdvertisementsPrismaRepository implements AdvertisementsRepository {
    constructor(private prisma: PrismaService) {}
    async create(data: CreateAdvertisementDto): Promise<Advertisement> {
        const advertisement = new Advertisement()
        Object.assign(advertisement, {
            ...data
        })
        const newAdvertisement = await this.prisma.advertisement.create({
            data: {
                brand: data.brand,
                color: data.color,
                cover_image: data.cover_image,
                description: data.description,
                fipe_list_price: data.fipe_list_price,
                gallery_image_1: data.gallery_image_1,
                gallery_image_2: data.gallery_image_2,
                mileage: data.mileage,
                model: data.model,
                price: data.price,
                year: data.year,
                fuel: data.fuel
            }
        })
        return newAdvertisement
    }
    async findAll(): Promise<Advertisement[]> {
        const advertisements = await this.prisma.advertisement.findMany()
        return advertisements
    }
    async findOne(id: number): Promise<Advertisement> {
        const advertisement = await this.prisma.advertisement.findUnique({
            where: { id }
        })
        return advertisement
    }
    async update(id: number, data: UpdateAdvertisementDto): Promise<Advertisement> {
        const advertisement = await this.prisma.advertisement.update({
            where: { id },
            data: { ...data }
        })
        return advertisement
    }
    async delete(id: number): Promise<void> {
        await this.prisma.advertisement.delete({
            where: { id }
        })
    }
}