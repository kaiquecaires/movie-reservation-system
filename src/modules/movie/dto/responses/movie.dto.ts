import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'
import { CreateMovieDTO } from '../body/create-movie.dto'

export class MovieDTO extends CreateMovieDTO {
  @ApiProperty({ example: '1', required: true })
  @IsNumber()
  id: number
}
