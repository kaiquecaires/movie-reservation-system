import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class CheckoutRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(checkoutData: Prisma.CheckoutCreateArgs, reservationsData: Prisma.ReservationCreateArgs[]) {
    return await this.prisma.$transaction(async prisma => {
      const checkout = await prisma.checkout.create(checkoutData)

      const reservations = reservationsData.map(reservation => {
        return prisma.reservation.create({
          data: {
            seatId: reservation.data.seatId,
            showTimeId: reservation.data.showTimeId,
            checkoutId: checkout.id
          }
        })
      })

      const createdReservations = await Promise.all(reservations)

      return {
        id: checkout.id,
        reservations: createdReservations
      }
    })
  }
}
