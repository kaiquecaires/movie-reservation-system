import { ApiProperty } from "@nestjs/swagger";
import { CreateShowTimeDTO } from "../body/create-show-time.dto";
import { IsInt } from "class-validator";

export class CreateShowTimeResponseDTO extends CreateShowTimeDTO {
  @ApiProperty({ example: 1 })
  @IsInt()
  id: Number
}
