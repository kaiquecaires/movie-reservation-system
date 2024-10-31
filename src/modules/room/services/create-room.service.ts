import { ConflictException, Injectable } from "@nestjs/common";
import { CreateRoomDTO } from "../dto/body/create-room.dto";
import { RoomsRepository } from "src/infra/postgresql/repositories/rooms.repository";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class CreateRoomService {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async execute(data: CreateRoomDTO) {
    try {
      const id = await this.roomsRepository.create({
        data: {
          name: data.name,
          isAvailable: data.isAvailable
        }
      })
      return {
        id,
        ...data
      }
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError && err.code === 'P2002') {
        throw new ConflictException(`Unique constraint failed on the fields: ${err.meta?.target}`)
      }
      throw err
    }
  }
}
