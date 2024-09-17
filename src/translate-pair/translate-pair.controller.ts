import { Body, Controller, Post } from '@nestjs/common';
import { CreateTranslatePairRequest } from './dto/request/create-translate-pair.dto';
import { TranslatePairResponse } from './dto/response/translate-pair.dto';
import { TranslatePairService } from './translate-pair.service';

@Controller('translate-pairs')
export class TranslatePairController {
  constructor(private readonly translatePairService: TranslatePairService) {}

  @Post()
  async createTranslatePair(
    @Body() createTranslatePairRequest: CreateTranslatePairRequest,
  ): Promise<TranslatePairResponse> {
    return this.translatePairService.createTranslatePair(createTranslatePairRequest);
  }

}
