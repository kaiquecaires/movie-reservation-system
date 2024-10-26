import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class MoviesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.MovieCreateArgs) {
    const movie = await this.prisma.movie.create(data)
    return movie.id
  }
}
