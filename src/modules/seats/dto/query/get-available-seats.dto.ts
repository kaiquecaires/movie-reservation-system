import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsInt } from "class-validator";

export class GetAvailableSeatsDTO {
  @ApiProperty({ example: 1, required: true })
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  showTimeId: number
}
