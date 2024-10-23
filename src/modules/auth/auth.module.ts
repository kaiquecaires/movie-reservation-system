import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { SignUpService } from './services/sign-up.service'
import { PrismaModule } from 'src/infra/postgresql/prisma.module'

@Module({
  providers: [
    SignUpService
  ],
  controllers: [AuthController],
  imports: [PrismaModule]
})
export class AuthModule {}
