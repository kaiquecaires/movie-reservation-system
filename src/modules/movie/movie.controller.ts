import { Body, Controller, HttpCode, Param, ParseIntPipe, Post, Put, Req, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiNoContentResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateMovieDTO } from "./dto/body/create-movie.dto";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateMovieService } from "./services/create-movie.service";
import { MovieDTO } from "./dto/responses/movie.dto";
import { AuthGuard } from "@nestjs/passport";
import { FastifyFileInterceptor } from "src/interceptors/fastify-file.interceptor";
import { UpdloadPosterImageDTO } from "./dto/responses/upload-poster-image.dto";
import { UpdateMovieDTO } from "./dto/body/update-movie.dto";
import { UpdateMovieService } from "./services/update-movie.service";

@ApiTags('Movies | V1')
@Controller({
  version: '1',
  path: 'movie'
})
export class MovieController {
  constructor(
    private readonly createMovieService: CreateMovieService,
    private readonly updateMovieService: UpdateMovieService
  ) {}

  @HttpCode(201)
  @ApiOperation({
    summary: 'Route to create a movie'
  })
  @ApiCreatedResponse({
    description: 'Result of this route',
    type: MovieDTO
  })
  @ApiBearerAuth()
  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() body: CreateMovieDTO, @Res() res: FastifyReply) {
    const result = await this.createMovieService.execute(body)
    return res.status(201).send(result)
  }

  @HttpCode(200)
  @ApiOperation({
    summary: 'Route to upload a poster image'
  })
  @ApiCreatedResponse({
    description: 'Result of this route',
    type: UpdloadPosterImageDTO
  })
  @ApiBearerAuth()
  @Post('/poster-image')
  @UseInterceptors(new FastifyFileInterceptor('file', './uploads'))
  @UseGuards(AuthGuard('jwt'))
  async uploadPosterImage(@Req() request: FastifyRequest) {
    const filePath = (request as any).filePath;
    return { path: filePath }
  }

  @HttpCode(204)
  @ApiOperation({
    summary: 'Route to update movie'
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiNoContentResponse()
  @Put('/:id')
  async updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateMovieDTO, @Res() res: FastifyReply
  ) {
    await this.updateMovieService.execute(id, body)
    return res.status(204).send()
  }
}
