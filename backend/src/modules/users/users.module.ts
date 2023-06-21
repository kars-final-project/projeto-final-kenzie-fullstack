import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { UsersPrismaRepository } from './repositories/prisma/user-prisma.repository';
import { AdressesModule } from '../adresses/adresses.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from 'src/utils/mail.service';

@Module({
  imports: [
    AdressesModule,
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      },
      defaults: {
        from: "iarley96@gmail.com"
      }
    })
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    MailService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    }
  ],
  exports: [UsersService]
})
export class UsersModule {}
