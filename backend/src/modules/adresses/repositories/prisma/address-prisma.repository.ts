import { PrismaService } from "src/database/prisma.service"
import { Adress } from "../../entities/adress.entity"
import { Address } from "@prisma/client"
import { Injectable } from "@nestjs/common"
import { AddressRepository } from "../address.repository"
import { UpdateAdressDto } from "../../dto/update-adress.dto"
import { plainToInstance } from "class-transformer"

@Injectable()
export class AddressPrismaRepository implements AddressRepository {
    constructor(private prisma: PrismaService) {}
    async create(addressData: Adress): Promise<Address> {
        return this.prisma.address.create({
            data: addressData
        })
    }

    async update(user_id: number, data: UpdateAdressDto): Promise<Address> {
        const address = await this.prisma.address.update({
            where: { user_id },
            data: { ...data }
        })
        return plainToInstance(Adress, address)
    }
}