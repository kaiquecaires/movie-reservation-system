import { Module } from "@nestjs/common";
import { CreateCheckoutService } from "./services/create-checkout.service";
import { CheckoutController } from "./checkout.controller";
import { PrismaModule } from "src/infra/postgresql/prisma.module";

@Module({
  providers: [
    CreateCheckoutService
  ],
  controllers: [CheckoutController],
  imports: [PrismaModule]
})
export class CheckoutModule {}
