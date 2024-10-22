import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { SignUpService } from './services/sign-up.service'

@Module({
  providers: [
    SignUpService
  ],
  controllers: [AuthController]
})
export class AuthModule {}
