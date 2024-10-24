import { plainToInstance } from "class-transformer";
import { SignUpBodyDTO } from "../dto/body/sign-up.dto";
import { SignUpResponseDTO } from "../dto/responses/sign-up-response.dto";
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/infra/postgresql/repositories/users.repository";
import { BcryptService } from "./bcrypt.service";

@Injectable()
export class SignUpService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly bcryptService: BcryptService
  ) {}

  async execute({ name, email, password }: SignUpBodyDTO): Promise<SignUpResponseDTO> {
    const hashedPassword = await this.bcryptService.hashPassword(password)
    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    })
    return plainToInstance(SignUpResponseDTO, user, {
      excludeExtraneousValues: true
    })
  }
}
