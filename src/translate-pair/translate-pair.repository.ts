import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TranslatePair } from './models/TranslatePair';

@Injectable()
export class TranslatePairRepository {
  constructor(
    @InjectModel(TranslatePair.name)
    private readonly translatePair: Model<TranslatePair>,
  ) {}

  async insertOne(data: Partial<TranslatePair>): Promise<TranslatePair> {
    const newTranslatePair = new this.translatePair(data);

    return newTranslatePair.save();
  }

  async findOneById(id: string): Promise<TranslatePair> {
    return this.translatePair.findById(id);
  }

  async findAll(): Promise<TranslatePair[]> {
    return this.translatePair.find();
  }
}
