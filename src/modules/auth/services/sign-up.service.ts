import { plainToInstance } from "class-transformer";
import { SignUpBodyDTO } from "../dto/body/sign-up.dto";
import { SignUpResponseDTO } from "../dto/responses/sign-up-response.dto";
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/infra/postgresql/repositories/users.repository";

@Injectable()
export class SignUpService {
  constructor(
    private readonly usersRepository: UsersRepository
  ) {}

  async execute({ name, email, password }: SignUpBodyDTO): Promise<SignUpResponseDTO> {
    const user = this.usersRepository.create({
      name,
      email,
      password
    })
    return plainToInstance(SignUpResponseDTO, user, {
      excludeExtraneousValues: true
    })
  }
}
