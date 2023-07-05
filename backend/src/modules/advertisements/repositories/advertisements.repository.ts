import { CreateAdvertisementDto } from "../dto/create-advertisement.dto";
import { UpdateAdvertisementDto } from "../dto/update-advertisement.dto";
import { Advertisement } from "../entities/advertisement.entity";



export abstract class AdvertisementsRepository {
    abstract create(data: CreateAdvertisementDto, user_id: string): Promise<Advertisement>
    abstract findAll(): Promise<Advertisement[]>
    abstract findManyByUserId(id: number): Promise<Advertisement[]>
    abstract findOne(id: number): Promise<Advertisement>
    abstract update(id: number, data: UpdateAdvertisementDto): Promise<Advertisement>
    abstract delete(id: number): Promise<void>
}
