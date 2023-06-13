import { Module } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { AdvertisementsController } from './advertisements.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AdvertisementsPrismaRepository } from './repositories/prisma/advertisement-prisma.repository';
import { AdvertisementsRepository } from './repositories/advertisements.repository';

@Module({
  controllers: [AdvertisementsController],
  providers: [
    AdvertisementsService,
    PrismaService,
    {
      provide: AdvertisementsRepository,
      useClass: AdvertisementsPrismaRepository
    }
  ]
})
export class AdvertisementsModule {}
