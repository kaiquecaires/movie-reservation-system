import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsInt, ValidateNested } from "class-validator";

export class ReservationDTO {
  @ApiProperty({ example: 1, required: true })
  @IsInt()
  seatId: number
}

export class CheckoutDTO {
  @ApiProperty({ example: 1, required: true })
  @IsInt()
  showTimeId: number

  @ApiProperty({ type: [ReservationDTO], required: true })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ReservationDTO)
  reservations: ReservationDTO[]
}
