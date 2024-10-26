import { PrismaModule } from "src/infra/postgresql/prisma.module";
import { MovieController } from "./movie.controller";
import { CreateMovieService } from "./services/create-movie.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [
    CreateMovieService
  ],
  controllers: [MovieController],
  imports: [PrismaModule]
})
export class MovieModule {}
