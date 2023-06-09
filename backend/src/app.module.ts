import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AdressesModule } from './modules/adresses/adresses.module';
import { AdvertisementsModule } from './modules/advertisements/advertisements.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [UsersModule, AdressesModule, AdvertisementsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
