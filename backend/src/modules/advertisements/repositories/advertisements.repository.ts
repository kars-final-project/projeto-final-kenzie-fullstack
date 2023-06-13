import { CreateAdvertisementDto } from "../dto/create-advertisement.dto";
import { UpdateAdvertisementDto } from "../dto/update-advertisement.dto";
import { Advertisement } from "../entities/advertisement.entity";



export abstract class AdvertisementsRepository {
    abstract create(data: CreateAdvertisementDto, user_id: number): Promise<Advertisement>
    abstract findAll(user_id: number): Promise<Advertisement[]>
    abstract findOne(id: number): Promise<Advertisement>
    abstract update(id: number, data: UpdateAdvertisementDto): Promise<Advertisement>
    abstract delete(id: number): Promise<void>
}
