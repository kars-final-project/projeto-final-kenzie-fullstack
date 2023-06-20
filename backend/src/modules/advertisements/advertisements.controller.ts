import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AdvertisementsService } from './advertisements.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import { AdvertiserAuthGuard } from '../auth/advertiser-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('advertisements')
export class AdvertisementsController {
  constructor(private readonly advertisementsService: AdvertisementsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdvertiserAuthGuard)
  create(@Request() req ,@Body() createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementsService.create(createAdvertisementDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.advertisementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertisementsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, AdvertiserAuthGuard)
  update(@Request() req, @Param('id') id: string, @Body() updateAdvertisementDto: UpdateAdvertisementDto) {
    return this.advertisementsService.update(+id, updateAdvertisementDto, req.user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, AdvertiserAuthGuard)
  remove(@Request() req, @Param('id') id: string) {
    return this.advertisementsService.remove(+id, req.user.id);
  }
}
