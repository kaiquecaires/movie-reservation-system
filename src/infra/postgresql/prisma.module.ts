import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UsersRepository } from "./repositories/users.repository";
import { MoviesRepository } from "./repositories/movies.repository";
import { RoomsRepository } from "./repositories/rooms.repository";
import { SeatsRepository } from "./repositories/seats.repository";
import { ShowTimesRepository } from "./repositories/show-times.repository";
import { CheckoutRepository } from "./repositories/checkout-repository";

@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MoviesRepository,
    RoomsRepository,
    SeatsRepository,
    ShowTimesRepository,
    CheckoutRepository
  ],
  exports: [
    PrismaService,
    UsersRepository,
    MoviesRepository,
    RoomsRepository,
    SeatsRepository,
    ShowTimesRepository,
    CheckoutRepository
  ]
})
export class PrismaModule {}
