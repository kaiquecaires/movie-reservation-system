import { Body, Controller, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateMovieDTO } from "./dto/body/create-movie.dto";
import { FastifyReply } from "fastify";
import { CreateMovieService } from "./services/create-movie.service";
import { MovieDTO } from "./dto/responses/movie.dto";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('Movies | V1')
@Controller({
  version: '1',
  path: 'movie'
})
export class MovieController {
  constructor(
    private readonly createMovieService: CreateMovieService
  ) {}

  @HttpCode(201)
  @ApiOperation({
    summary: 'Route to create a movie'
  })
  @ApiCreatedResponse({
    description: 'Result of this route',
    type: MovieDTO
  })
  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() body: CreateMovieDTO, @Res() res: FastifyReply) {
    const result = await this.createMovieService.execute(body)
    return res.status(201).send(result)
  }

}
