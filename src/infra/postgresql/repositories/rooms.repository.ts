import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class RoomsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.RoomCreateArgs) {
    const result = await this.prisma.room.create(data)
    return result.id
  }
}
