import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common'
import { SignUpService } from './services/sign-up.service'
import { ApiOkResponse, ApiOperation, ApiTags, ApiCreatedResponse } from '@nestjs/swagger'
import { SignUpBodyDTO } from './dto/body/sign-up.dto'
import { FastifyReply } from 'fastify'
import { AuthResponseDTO } from './dto/responses/auth.dto'
import { LoginBodyDTO } from './dto/body/login.dto'
import { LoginService } from './services/login.service'

@ApiTags('SignUp | V1')
@Controller({
  version: '1',
  path: 'auth'
})
export class AuthController {
  constructor(
    private readonly signUpService: SignUpService,
    private readonly loginService: LoginService
  ) {}

  @HttpCode(201)
  @ApiOperation({
    summary: 'Route to sign up'
  })
  @ApiCreatedResponse({
    description: 'Result of this route',
    type: AuthResponseDTO
  })
  @Post('sign-up')
  async signUp(@Body() body: SignUpBodyDTO, @Res() res: FastifyReply) {
    const result = await this.signUpService.execute(body)
    return res.send(result)
  }

  @HttpCode(200)
  @ApiOperation({
    summary: 'Route to login'
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: AuthResponseDTO
  })
  @Post('login')
  async login(@Body() body: LoginBodyDTO, @Res() res: FastifyReply) {
    const result = await this.loginService.execute(body)
    return res.send(result)
  }
}

