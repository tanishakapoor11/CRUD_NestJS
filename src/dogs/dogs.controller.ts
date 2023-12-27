/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.dogsService.findOne(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.update(name, updateDogDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.dogsService.remove(name);
  }
}
