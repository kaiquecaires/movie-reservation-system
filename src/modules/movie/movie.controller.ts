import { Body, Controller, HttpCode, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateMovieDTO } from "./dto/body/create-movie.dto";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateMovieService } from "./services/create-movie.service";
import { MovieDTO } from "./dto/responses/movie.dto";
import { AuthGuard } from "@nestjs/passport";
import { FastifyFileInterceptor } from "src/interceptors/fastify-file.interceptor";
import { UpdloadPosterImageDTO } from "./dto/responses/upload-poster-image.dto";

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
}
