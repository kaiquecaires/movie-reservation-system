import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common'
import { SignUpService } from './services/sign-up.service'
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { SignUpResponseDTO } from './dto/responses/sign-up-response.dto'
import { SignUpBodyDTO } from './dto/body/sign-up.dto'
import { FastifyReply } from 'fastify'

@ApiTags('SignUp | V1')
@Controller({
  version: '1',
  path: 'auth'
})
export class AuthController {
  constructor(
    private readonly signUpService: SignUpService
  ) {}

  @HttpCode(200)
  @ApiOperation({
    summary: 'Route to login'
  })
  @ApiOkResponse({
    description: 'Result of this route',
    type: SignUpResponseDTO
  })
  @Post('sign-up')
  async signUp(@Body() body: SignUpBodyDTO, @Res() res: FastifyReply) {
    const result = await this.signUpService.execute(body)
    return res.send(result)
  }
}

