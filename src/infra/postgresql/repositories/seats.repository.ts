import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SeatsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createMany(data: Prisma.SeatCreateManyArgs) {
    const response = await this.prisma.seat.createMany(data)
    return response
  }
}
