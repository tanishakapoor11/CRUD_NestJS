/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dog, DogSchema } from 'src/schemas/dogs.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Dog.name, schema: DogSchema }])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
