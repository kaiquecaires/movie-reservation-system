import { Module } from "@nestjs/common";
import { CreateRoomService } from "./services/create-room.service";
import { RoomController } from "./room.controller";
import { PrismaModule } from "src/infra/postgresql/prisma.module";

@Module({
  providers: [
  CreateRoomService
  ],
  controllers: [RoomController],
  imports: [PrismaModule]
})
export class RoomModule {}
