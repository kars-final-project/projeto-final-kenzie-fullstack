import { Module } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AdressesController } from './adresses.controller';
import { AddressRepository } from './repositories/address.repository';
import { AddressPrismaRepository } from './repositories/prisma/address-prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AdressesController],
  providers: [
    AdressesService,
    PrismaService,
    {
      provide: AddressRepository,
      useClass: AddressPrismaRepository,
    }],
  exports: [AddressRepository]
})
export class AdressesModule {}
