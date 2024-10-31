import { ApiProperty } from "@nestjs/swagger";
import { CreateRoomDTO } from "../body/create-room.dto";
import { IsNumber } from "class-validator";

export class CreateRoomResponseDTO extends CreateRoomDTO {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number
}
