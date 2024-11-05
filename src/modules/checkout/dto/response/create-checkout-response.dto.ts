import { ArrayMinSize, IsArray, IsInt, ValidateNested } from "class-validator";
import { ReservationDTO } from "../body/checkout.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ReservationResponseDTO extends ReservationDTO {
  @IsInt()
  id: number
}

export class CreateCheckoutResponseDTO {
  @IsInt()
  id: number

  @ApiProperty({ example: 1, required: true })
  @IsInt()
  userId: number

  @ApiProperty({ example: 1, required: true })
  @IsInt()
  showTimeId: number

  @ApiProperty({ type: [ReservationResponseDTO], required: true })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ReservationResponseDTO)
  reservations: ReservationResponseDTO[]
}
