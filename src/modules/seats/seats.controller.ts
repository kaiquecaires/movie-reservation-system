import { Body, Controller, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateSeatsDTO } from "./dto/body/create-seats.dto";
import { FastifyReply } from "fastify";
import { CreateSeatsService } from "./services/create-seats.service";
import { CreateSeatsResponseDTO } from "./dto/response/create-seats-response.dto";

@ApiTags('Seats | V1')
@Controller({
  version: '1',
  path: 'seats'
})
export class SeatsController {
  constructor (
    private readonly createSeatsService: CreateSeatsService
  ) {}

  @HttpCode(201)
  @ApiOperation({
    summary: 'Route to create many seats'
  })
  @ApiCreatedResponse({
    description: 'Result of this route',
    type: CreateSeatsResponseDTO
  })
  @ApiBearerAuth()
  @Post('/create-many')
  @UseGuards(AuthGuard('jwt'))
  async createMany(@Body() body: CreateSeatsDTO, @Res() res: FastifyReply) {
    const result = await this.createSeatsService.execute(body)
    return res.status(201).send(result)
  }
}
