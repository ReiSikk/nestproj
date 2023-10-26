import { Controller, Get, Post, Delete, Body, Param, Put, } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.schema';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {} // Inject the CatsService
  
//CRUD Operations
  @Post()
  addCat(@Body() createCatDto: CreateCatDto) {
      console.log(createCatDto);

      return this.catsService.create(createCatDto)
  } 
  @Get()
   getCats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Put(':id')
  async updateCat(@Param('id') id: string, @Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.update(id, createCatDto);
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: string): Promise<Cat> {
    return this.catsService.delete(id);
  }


}