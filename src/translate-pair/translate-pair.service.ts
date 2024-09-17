import { Injectable } from '@nestjs/common';
import { CreateTranslatePairRequest } from './dto/request/create-translate-pair.dto';
import { TranslatePairResponse } from './dto/response/translate-pair.dto';
import { TranslatePair } from './models/TranslatePair';
import { TranslatePairRepository } from './translate-pair.repository';

@Injectable()
export class TranslatePairService {
  constructor(private readonly translatePairRepository: TranslatePairRepository) {}

  async createTranslatePair(
    createTranslatePairRequest: CreateTranslatePairRequest,
  ): Promise<TranslatePairResponse> {
    const newTranslatePair = await this.translatePairRepository.insertOne({
      original_word: createTranslatePairRequest.originalWord,
      translated_word: createTranslatePairRequest.translatedWord,
    });

    return this.buildResponse(newTranslatePair);
  }

  private buildResponse(pair: TranslatePair): TranslatePairResponse {
    return {
      _id: pair._id as string,
      originalWord: pair.original_word,
      translatedWord: pair.translated_word,
      addedDate: pair.added_date,
    };
  }
}
