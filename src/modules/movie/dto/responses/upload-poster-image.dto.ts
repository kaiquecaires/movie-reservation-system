import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class UpdloadPosterImageDTO {
  @ApiProperty({ example: 'some url', required: true })
  @IsString()
  path: string
}
