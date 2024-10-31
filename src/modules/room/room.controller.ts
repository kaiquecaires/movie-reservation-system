import { Body, Controller, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateRoomService } from "./services/create-room.service";
import { CreateRoomResponseDTO } from "./dto/response/create-room-response.dto";
import { AuthGuard } from "@nestjs/passport";
import { CreateRoomDTO } from "./dto/body/create-room.dto";
import { FastifyReply } from "fastify";

@ApiTags('Rooms | V1')
@Controller({
  version: '1',
  path: 'room'
})
export class RoomController {
  constructor(private readonly createRoomService: CreateRoomService) {}

  @HttpCode(201)
  @ApiOperation({
    summary: 'Route to create a room'
  })
  @ApiCreatedResponse({
    description: 'Result of this route',
    type: CreateRoomResponseDTO
  })
  @ApiBearerAuth()
  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() body: CreateRoomDTO, @Res() res: FastifyReply) {
    const result = await this.createRoomService.execute(body)
    return res.status(201).send(result)
  }
}
