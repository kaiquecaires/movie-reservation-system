import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength, MaxLength, IsArray, IsNumber } from 'class-validator'

type Gender = {
  id: number
}

export class CreateMovieDTO {
  @ApiProperty({ example: 'movie name', required: true })
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  title: string

  @ApiProperty({ example: 'movie description', required: true })
  @IsString()
  @MinLength(3)
  @MaxLength(1000)
  description: string

  @ApiProperty({ example: 'movie name', required: true })
  @IsArray()
  genders: Gender[]

  @ApiProperty({ example: 'poster image url', required: true })
  @IsString()
  posterImage: string
}
