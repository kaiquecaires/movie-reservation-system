import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UsersRepository } from "./repositories/users.repository";
import { MoviesRepository } from "./repositories/movies.repository";

@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MoviesRepository
  ],
  exports: [
    PrismaService,
    UsersRepository,
    MoviesRepository
  ]
})

export class PrismaModule {}
