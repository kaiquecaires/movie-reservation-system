import { Body, Controller, Get, HttpCode, Post, Query, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags, ApiOkResponse } from "@nestjs/swagger";
import { CreateSeatsDTO } from "./dto/body/create-seats.dto";
import { FastifyReply } from "fastify";
import { CreateSeatsService } from "./services/create-seats.service";
import { CreateSeatsResponseDTO } from "./dto/response/create-seats-response.dto";
import { GetAvailableSeatsResponseDTO } from "./dto/response/get-available-seats-response.dto";
import { GetAvailableSeatsDTO } from "./dto/query/get-available-seats.dto";
import { GetAvailableSeatsService } from "./services/get-available-seats.service";

@ApiTags('Seats | V1')
@Controller({
  version: '1',
  path: 'seats'
})
export class SeatsController {
  constructor (
    private readonly createSeatsService: CreateSeatsService,
    private readonly getAvailableSeatsService: GetAvailableSeatsService
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
  @UseGuards(AuthGuard('admin'))
  async createMany(@Body() body: CreateSeatsDTO, @Res() res: FastifyReply) {
    const result = await this.createSeatsService.execute(body)
    return res.status(201).send(result)
  }

  @HttpCode(200)
  @ApiOperation({
    description: 'Route to get available seats'
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: GetAvailableSeatsResponseDTO
  })
  @ApiBearerAuth()
  @Get('/available')
  @UseGuards(AuthGuard('user'))
  async getAvailableSeats(@Query() query: GetAvailableSeatsDTO) {
    const response = await this.getAvailableSeatsService.execute(query.showTimeId)
    return response
  }
}
