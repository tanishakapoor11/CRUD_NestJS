/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog, DogDocument } from 'src/schemas/dogs.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DogsService {
  constructor(
    @InjectModel(Dog.name) private dogModel: Model<DogDocument>,
    ) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    return new this.dogModel(createDogDto).save();
  }

  async findAll() {
    return this.dogModel.find();
  }

  async findOne(name: string) {
    return this.dogModel.findOne({ name });
  }

  async update(name: string, updateDogDto: UpdateDogDto) {
    return this.dogModel.updateOne({ name }, { $set: updateDogDto });
  }

  async remove(name: string) {
    return this.dogModel.deleteOne({ name });
  }
}
