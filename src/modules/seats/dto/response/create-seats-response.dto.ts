import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSeatsResponseDTO {
  @ApiProperty({ example: '12 seats created' })
  @IsString()
  message: string
}
