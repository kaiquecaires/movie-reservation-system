import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { BcryptService } from './bcrypt.service';
import { UsersRepository } from 'src/infra/postgresql/repositories/users.repository';
import { LoginBodyDTO } from '../dto/body/login.dto';
import { AuthResponseDTO } from '../dto/responses/auth.dto'
import { JwtService } from './jwt.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly bcryptService: BcryptService,
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService
  ) {}

  async execute(body: LoginBodyDTO): Promise<AuthResponseDTO> {
    const user = await this.usersRepository.getByEmail(body.email)
    if (!user) {
      throw new NotFoundException('User not found!')
    }

    const isPasswordCorrect = await this.bcryptService.comparePassword(body.password, user.password)

    if (!isPasswordCorrect) {
      throw new BadRequestException('Incorrect password!')
    }

    return {
      token: this.jwtService.generateToken(user.id, user.role)
    }
  }
}
