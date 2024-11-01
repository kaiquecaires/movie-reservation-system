import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UsersRepository } from "./repositories/users.repository";
import { MoviesRepository } from "./repositories/movies.repository";
import { RoomsRepository } from "./repositories/rooms.repository";
import { SeatsRepository } from "./repositories/seats.repository";

@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MoviesRepository,
    RoomsRepository,
    SeatsRepository
  ],
  exports: [
    PrismaService,
    UsersRepository,
    MoviesRepository,
    RoomsRepository,
    SeatsRepository
  ]
})
export class PrismaModule {}
