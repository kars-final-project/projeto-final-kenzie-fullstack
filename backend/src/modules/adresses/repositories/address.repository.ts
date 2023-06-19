import { Address } from "@prisma/client";

export abstract class AddressRepository {
    abstract create(data): Promise<Address>
}