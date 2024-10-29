import { Injectable } from "@nestjs/common";
import { UpdateMovieDTO } from "../dto/body/update-movie.dto";
import { MoviesRepository } from "src/infra/postgresql/repositories/movies.repository";

@Injectable()
export class UpdateMovieService {
  constructor (private readonly moviesRepository: MoviesRepository) {}

  async execute(id: number, data: UpdateMovieDTO) {
    await this.moviesRepository.update({
      data: {
        title: data.title,
        description: data.description,
        posterImage: data.posterImage,
        genders: {
          connect: data.genders
        }
      },
      where: {
        id
      }
    })
  }
}
