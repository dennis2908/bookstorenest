import {
  IsDecimal,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    example: 'rehmat jaka',
    required: true,
  })
  @IsString()
  @MinLength(2, { message: 'Full Name must have atleast 2 characters.' })
  @IsNotEmpty()
  fullname: string;

  @ApiProperty({
    example: 'rehmat@yahoo.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @ApiProperty({
    example: 20,
    required: false,
  })
  @IsDecimal()
  total: number;

  @ApiProperty({
    example:
      '{"cartItems":[{"product":{"id":3,"title":"Pride and Prejudice","price":55.99,"writer":"Jane Austen","category":{"title":"Romance","value":"romance"},"image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg"},"count":1}],"totalPrice":55.99,"totalCount":1}',
    required: false,
  })
  @IsString()
  order: string;
}
