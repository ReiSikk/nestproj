import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cat.schema';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {

    constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        //this is saving the cat
        return createdCat.save();
      }
    
      async findAll(): Promise<Cat[]> {
        //this is retrieving all the cats
        return this.catModel.find().exec();
      }

    getCats() : string {
        return "We are the cats";
    }

}