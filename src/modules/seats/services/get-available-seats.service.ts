import { Injectable } from "@nestjs/common";
import { SeatsRepository } from "src/infra/postgresql/repositories/seats.repository";

@Injectable()
export class GetAvailableSeatsService {
  constructor(
    private readonly seatsRepository: SeatsRepository
  ) {}

  async execute(showTimeId: number) {
    const response = await this.seatsRepository.findAvailableSeats(showTimeId)
    return response
  }
}
