import { Body, Controller, HttpCode, Post, Request, Res, UseGuards } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateCheckoutService } from "./services/create-checkout.service";
import { CreateCheckoutResponseDTO } from "./dto/response/create-checkout-response.dto";
import { CheckoutDTO } from "./dto/body/checkout.dto";
import { FastifyReply, FastifyRequest } from "fastify";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('Checkout | V1')
@Controller({
  version: '1',
  path: 'checkout'
})
export class CheckoutController {
  constructor(
    private readonly createCheckoutService: CreateCheckoutService
  ) {}

  @HttpCode(201)
  @ApiOperation({
    summary: 'Route to create checkout'
  })
  @ApiCreatedResponse({
    description: 'Result of this route',
    type: CreateCheckoutResponseDTO
  })
  @UseGuards(AuthGuard('user'))
  @Post('/')
  async create(@Body() body: CheckoutDTO, @Res() res: FastifyReply, @Request() req: FastifyRequest) {
    // @ts-expect-error
    const userId = req.user?.userId
    const result = await this.createCheckoutService.execute(userId, body)
    return res.status(201).send(result)
  }
}
