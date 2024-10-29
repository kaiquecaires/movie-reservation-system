import { PrismaModule } from "src/infra/postgresql/prisma.module";
import { MovieController } from "./movie.controller";
import { CreateMovieService } from "./services/create-movie.service";
import { Module } from "@nestjs/common";
import { UpdateMovieService } from "./services/update-movie.service";

@Module({
  providers: [
    CreateMovieService,
    UpdateMovieService
  ],
  controllers: [MovieController],
  imports: [PrismaModule]
})
export class MovieModule {}
