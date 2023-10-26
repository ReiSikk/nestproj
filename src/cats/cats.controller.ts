import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.schema';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {} // Inject the CatsService

  @Get()
   getCats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  addCat(@Body() createCatDto: CreateCatDto) {
      console.log(createCatDto);
        
      return this.catsService.create(createCatDto)
  } 

}