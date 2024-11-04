import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
import { TotalPriceDTO } from "../dto/total-price.dto";

@Injectable()
export class ShowTimesRepository {
  constructor (private readonly prisma: PrismaService) {}

  async create(data: Prisma.ShowTimeCreateArgs) {
    const response = await this.prisma.showTime.create(data)
    return response
  }

  async getTotalPrice(showTimeId: number, seatIdsList: number[]): Promise<TotalPriceDTO> {
    const response = await this.prisma.$queryRaw<TotalPriceDTO[]>`
    SELECT SUM(
        CASE
            WHEN s."seatType" = 'REGULAR' THEN st."priceRegular" 
            ELSE st."priceVIP" 
        END
    ) AS total
    FROM seats s
    INNER JOIN show_times st ON st."roomId" = s."roomId" AND st.id = ${showTimeId}
    WHERE s.id IN (${seatIdsList});
    `
    return response[0]
  }
}
