import { Module } from "@nestjs/common";
import { CreateShowTimeService } from "./services/create-show-time.service";
import { ShowTimesController } from "./show-times.controller"
import { PrismaModule } from "src/infra/postgresql/prisma.module";

@Module({
  providers: [
    CreateShowTimeService
  ],
  controllers: [ShowTimesController],
  imports: [PrismaModule]
})
export class ShowTimesModule {}
