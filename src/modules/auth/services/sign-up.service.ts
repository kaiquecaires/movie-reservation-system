import { SignUpBodyDTO } from "../dto/body/sign-up.dto";
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/infra/postgresql/repositories/users.repository";
import { BcryptService } from "./bcrypt.service";
import { AuthResponseDTO } from "../dto/responses/auth.dto";
import { JwtService } from "./jwt.service";

@Injectable()
export class SignUpService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService
  ) {}

  async execute({ name, email, password }: SignUpBodyDTO): Promise<AuthResponseDTO> {
    const hashedPassword = await this.bcryptService.hashPassword(password)
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    })
    return {
      token: this.jwtService.generateToken(user.id, user.role)
    }
  }
}
