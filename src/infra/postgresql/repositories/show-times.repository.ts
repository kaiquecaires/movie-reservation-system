import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class ShowTimesRepository {
  constructor (private readonly prisma: PrismaService) {}

  async create(data: Prisma.ShowTimeCreateArgs) {
    const response = await this.prisma.showTime.create(data)
    return response
  }
}
