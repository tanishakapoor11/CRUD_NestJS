/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';


@Module({
  imports: [
    DogsModule,
    MongooseModule.forRoot('mongodb+srv://tanisha:tanisha123@cluster0.icgt0vq.mongodb.net'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
