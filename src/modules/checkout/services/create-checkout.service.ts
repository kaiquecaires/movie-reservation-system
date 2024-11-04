import { Injectable } from "@nestjs/common";
import { CheckoutRepository } from "src/infra/postgresql/repositories/checkout-repository";
import { CheckoutDTO } from "../dto/body/checkout.dto";
import { ShowTimesRepository } from "src/infra/postgresql/repositories/show-times.repository";

@Injectable()
export class CreateCheckoutService {
  constructor(
    private readonly checkoutRepository: CheckoutRepository,
    private readonly showTimesRepository: ShowTimesRepository
  ) {}

  async execute(data: CheckoutDTO) {
    const totalPrice = await this.showTimesRepository.getTotalPrice(
      data.showTimeId,
      data.reservations.map(reservation => reservation.seatId)
    )
    const response = await this.checkoutRepository.create({
      data: {
        userId: data.userId,
        totalPrice: totalPrice.total
      }
    }, data.reservations.map(reservation => {
        return {
          data: {
            showTimeId: data.showTimeId,
            seatId: reservation.seatId,
            checkoutId: 0
          }
        }
      }))

    return response
  }
}
