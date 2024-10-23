import { Prisma, User } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({ data })
    return user
  }
}
