import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsDecimal, IsInt } from "class-validator";

export class CreateShowTimeDTO {
  @ApiProperty({ example: 1, required: true })
  @IsInt()
  roomId: number

  @ApiProperty({ example: 1, required: true })
  @IsInt()
  movieId: number

  @ApiProperty({ example: 10.20, required: true })
  @IsDecimal({ decimal_digits: '2', force_decimal: true })
  priceRegular: string

  @ApiProperty({ example: 10.20, required: true })
  @IsDecimal({ decimal_digits: '2', force_decimal: true })
  priceVIP: string

  @ApiProperty({ example: true, required: true })
  @IsBoolean()
  isActive: boolean

  @ApiProperty({ example: new Date().toISOString(), required: true })
  @IsDateString()
  startTime: string

  @ApiProperty({ example: new Date().toISOString(), required: true })
  @IsDateString()
  endTime: string
}
