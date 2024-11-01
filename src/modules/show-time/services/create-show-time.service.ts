import { BadRequestException, Injectable } from "@nestjs/common";
import { ShowTimesRepository } from "src/infra/postgresql/repositories/show-times.repository";
import { CreateShowTimeDTO } from "../dto/body/create-show-time.dto";

@Injectable()
export class CreateShowTimeService {
  constructor(private readonly showTimesRepository: ShowTimesRepository) {}

  async execute(data: CreateShowTimeDTO) {
    if (data.startTime <= data.endTime) {
      throw new BadRequestException('startTime must be grater than endTime')
    }

    const response = await this.showTimesRepository.create({
      data: {
        roomId: data.roomId,
        movieId: data.movieId,
        priceRegular: data.priceRegular,
        priceVIP: data.priceVIP,
        startTime: data.startTime,
        endTime: data.endTime,
        isActive: data.isActive
      }
    })

    return {
      id: response.id,
      ...data
    }
  }
}
