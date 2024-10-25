import * as jwt from 'jsonwebtoken'
import { Injectable } from '@nestjs/common'

@Injectable()
export class JwtService {
  private readonly secret = process.env.JWT_SECRET
  private readonly expiration = process.env.EXPIRATION_TIME

  generateToken(userId: number, role: string): string {
    return jwt.sign({ userId, role }, this.secret, { expiresIn: this.expiration })
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.secret)
    } catch (error) {
      return null
    }
  }
}
