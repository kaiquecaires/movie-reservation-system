import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { SignUpService } from './services/sign-up.service'
import { PrismaModule } from 'src/infra/postgresql/prisma.module'
import { BcryptService } from './services/bcrypt.service'
import { JwtService } from './services/jwt.service'
import { LoginService } from './services/login.service'

@Module({
  providers: [
    SignUpService,
    BcryptService,
    JwtService,
    LoginService
  ],
  controllers: [AuthController],
  imports: [PrismaModule]
})
export class AuthModule {}
