import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from '../create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cat.interface';
import {ForbiddenException} from '../forbidden.exception';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
@UseFilters(new HttpExceptionFilter())
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException();
}

  @Get()
  async findAll() {
    throw new ForbiddenException();
  }
  @UseFilters(new HttpExceptionFilter())
export class CatsController {}