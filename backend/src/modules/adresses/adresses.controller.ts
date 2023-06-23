import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('adresses')
export class AdressesController {
  constructor(private readonly adressesService: AdressesService) {}

  @Post()
  create(@Body() createAdressDto: CreateAdressDto) {
    return this.adressesService.create(createAdressDto);
  }

  @Get()
  findAll() {
    return this.adressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adressesService.findOne(+id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  update(@Request() req, @Body() updateAdressDto: UpdateAdressDto) {
    return this.adressesService.update(req.user.id, updateAdressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adressesService.remove(+id);
  }
}
