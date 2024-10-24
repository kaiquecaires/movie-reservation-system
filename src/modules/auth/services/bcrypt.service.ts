import * as bcrypt from 'bcrypt'

export class BcryptService {
  private readonly saltRounds = 10

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds)
    return await bcrypt.hash(password, salt)
  }

  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
  }
}
