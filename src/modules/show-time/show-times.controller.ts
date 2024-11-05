import { Body, Controller, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateShowTimeService } from "./services/create-show-time.service";
import { CreateShowTimeResponseDTO } from "./dto/response/create-show-time-response.dto";
import { AuthGuard } from "@nestjs/passport";
import { CreateShowTimeDTO } from "./dto/body/create-show-time.dto";
import { FastifyReply } from "fastify";

@ApiTags('Show Times | V1')
@Controller({
  version: '1',
  path: 'show-times'
})
export class ShowTimesController {
  constructor(
    private readonly createShowTimesService: CreateShowTimeService
  ) {}

  @HttpCode(201)
  @ApiOperation({
    summary: 'Route to create a show time'
  })
  @ApiCreatedResponse({
    description: 'Result of this route',
    type: CreateShowTimeResponseDTO
  })
  @ApiBearerAuth()
  @Post('/')
  @UseGuards(AuthGuard('admin'))
  async create(@Body() body: CreateShowTimeDTO, @Res() res: FastifyReply) {
    const result = await this.createShowTimesService.execute(body)
    return res.status(201).send(result)
  }
}
