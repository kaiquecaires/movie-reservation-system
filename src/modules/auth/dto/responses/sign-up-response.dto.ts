import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { IsEmail, IsNumber, IsString, MaxLength } from 'class-validator'

export class SignUpResponseDTO {
  @ApiProperty({ example: 1, required: true })
  @IsNumber()
  @Expose()
  id: number

  @ApiProperty({ example: 'your name', required: true })
  @IsString()
  @MaxLength(50)
  @Expose()
  name: string

  @ApiProperty({ example: 'email@mail.com', required: true })
  @IsEmail()
  @Expose()
  email: string
}
