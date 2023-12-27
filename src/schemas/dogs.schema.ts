/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DogDocument = Dog & Document;

@Schema()
export class Dog {
  @Prop()
  name: string;

  @Prop()
  breed: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);