import { Module } from "@nestjs/common";
import { CreateSeatsService } from "./services/create-seats.service";
import { SeatsController } from "./seats.controller";
import { PrismaModule } from "src/infra/postgresql/prisma.module";
import { GetAvailableSeatsService } from "./services/get-available-seats.service";

@Module({
  providers: [
    CreateSeatsService,
    GetAvailableSeatsService
  ],
  controllers: [SeatsController],
  imports: [PrismaModule]
})
export class SeatsModule {}
