import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator'

export class SignUpBodyDTO {
  @ApiProperty({ example: 'your name', required: true })
  @IsString()
  @MaxLength(50)
  name: string

  @ApiProperty({ example: 'email@mail.com', required: true })
  @IsEmail()
  email: string

  @ApiProperty({ example: 'yourpassword', required: true })
  @IsString()
  @MinLength(8)
  @MaxLength(12)
  password: string
}
