import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { UsersPrismaRepository } from './repositories/prisma/user-prisma.repository';
import { AdressesModule } from '../adresses/adresses.module';

@Module({
  imports: [AdressesModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    }
  ],
  exports: [UsersService]
})
export class UsersModule {}
