import { MoviesRepository } from "src/infra/postgresql/repositories/movies.repository";
import { CreateMovieDTO } from "../dto/body/create-movie.dto";
import { Injectable } from "@nestjs/common";
import { MovieDTO } from "../dto/responses/movie.dto";

@Injectable()
export class CreateMovieService {
  constructor(
    private readonly moviesRepository: MoviesRepository
  ) {}

  async execute(data: CreateMovieDTO): Promise<MovieDTO> {
    const { title, genders, description, posterImage } = data
    const id = await this.moviesRepository.create({
      data: {
        title,
        description,
        genders: {
          connect: genders
        },
        posterImage
      }
    })
    return {
      ...data,
      id
    }
  }
}
