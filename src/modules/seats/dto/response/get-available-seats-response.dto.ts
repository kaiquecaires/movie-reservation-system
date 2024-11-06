import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsInt, IsString, ValidateNested } from "class-validator";

class SeatDTO {
  @ApiProperty({ example: 1, required: true })
  @IsInt()
  id: number

  @ApiProperty({ example: 'A1', required: true })
  @IsString()
  name: string
}

export class GetAvailableSeatsResponseDTO {
  @ApiProperty({ type: [SeatDTO], required: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SeatDTO)
  seats: SeatDTO[]
}
