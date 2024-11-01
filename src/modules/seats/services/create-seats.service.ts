import { SeatsRepository } from "src/infra/postgresql/repositories/seats.repository";
import { CreateSeatsDTO } from "../dto/body/create-seats.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateSeatsService {
  constructor(private readonly seatsRepository: SeatsRepository) {}

  async execute(data: CreateSeatsDTO) {
    const response = await this.seatsRepository.createMany({
      data: data.seats.map(seat => ({
        roomId: data.roomId,
        isAvailable: seat.isAvailable,
        name: seat.name,
        seatType: seat.seatType
      }))
    })

    return {
      message: `${response.count} created`
    }
  }
}
