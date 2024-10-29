
import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength, MaxLength, IsArray } from 'class-validator'

type Gender = {
  id: number
}

export class UpdateMovieDTO {
  @ApiProperty({ example: 'movie name' })
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  title?: string

  @ApiProperty({ example: 'movie description' })
  @IsString()
  @MinLength(3)
  @MaxLength(1000)
  description?: string

  @ApiProperty({ example: 'movie name' })
  @IsArray()
  genders?: Gender[]

  @ApiProperty({ example: 'poster image url' })
  @IsString()
  posterImage?: string
}
