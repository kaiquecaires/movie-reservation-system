import { ApiProperty } from '@nestjs/swagger'
import { IsString, MaxLength, IsBoolean } from 'class-validator'

export class CreateRoomDTO {
  @ApiProperty({ example: 'Room 1', required: true })
  @MaxLength(50)
  @IsString()
  name: string

  @ApiProperty({ example: true, required: true })
  @IsBoolean()
  isAvailable: boolean
}
