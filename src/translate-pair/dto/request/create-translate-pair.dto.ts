import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTranslatePairRequest {
  @IsString()
  @IsNotEmpty()
  originalWord: string;

  @IsString()
  @IsNotEmpty()
  translatedWord: string;
}
