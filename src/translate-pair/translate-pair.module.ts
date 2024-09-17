import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TranslatePair, TranslatePairSchema } from './models/TranslatePair';
import { TranslatePairController } from './translate-pair.controller';
import { TranslatePairRepository } from './translate-pair.repository';
import { TranslatePairService } from './translate-pair.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TranslatePair.name, schema: TranslatePairSchema }]),
  ],
  controllers: [TranslatePairController],
  providers: [TranslatePairService, TranslatePairRepository],
  exports: [TranslatePairService],
})
export class TranslatePairModule {}
