import { ForbiddenException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class AuthAdminStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    })
  }

  async validate(payload: any): Promise<any> {
    if (payload.role !== 'admin') {
      throw new ForbiddenException('Insufficient permissions')
    }
    return { userId: payload.sub, role: payload.role }
  }
}
