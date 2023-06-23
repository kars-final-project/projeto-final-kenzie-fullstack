import { Address } from "@prisma/client";
import { UpdateAdressDto } from "../dto/update-adress.dto";

export abstract class AddressRepository {
    abstract create(data): Promise<Address>
    abstract update(user_id: number, data: UpdateAdressDto): Promise<Address>
}