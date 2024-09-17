import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class TranslatePair extends Document {
  @Prop()
  original_word: string;

  @Prop()
  translated_word: string;

  @Prop({ default: Date.now })
  added_date: Date;
}

export const TranslatePairSchema = SchemaFactory.createForClass(TranslatePair);
