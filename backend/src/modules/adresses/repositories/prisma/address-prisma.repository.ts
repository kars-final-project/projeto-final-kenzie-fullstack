import { PrismaService } from "src/database/prisma.service"
import { Adress } from "../../entities/adress.entity"
import { Address } from "@prisma/client"
import { Injectable } from "@nestjs/common"
import { AddressRepository } from "../address.repository"

@Injectable()
export class AddressPrismaRepository implements AddressRepository {
    constructor(private prisma: PrismaService) {}
    async create(addressData: Adress): Promise<Address> {
        return this.prisma.address.create({
            data: addressData
        })
    }
}