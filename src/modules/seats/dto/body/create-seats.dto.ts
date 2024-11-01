import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsBoolean, IsEnum, IsInt, IsString, MaxLength, ValidateNested } from "class-validator";

export enum SeatType {
  REGULAR = 'REGULAR',
  VIP = 'VIP'
}

export class SeatDTO {
  @ApiProperty({ example: 'A1', required: true })
  @IsString()
  @MaxLength(5)
  name: string

  @ApiProperty({ example: true, required: true })
  @IsBoolean()
  isAvailable: boolean

  @ApiProperty({ enum: SeatType, example: SeatType.REGULAR })
  @IsEnum(SeatType)
  seatType: SeatType
}

export class CreateSeatsDTO {
  @ApiProperty({ example: 1, required: true })
  @IsInt()
  roomId: number

  @ApiProperty({ type: [SeatDTO], required: true })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => SeatDTO)
  seats: SeatDTO[]
}
