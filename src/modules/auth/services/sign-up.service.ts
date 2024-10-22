import { plainToInstance } from "class-transformer";
import { SignUpBodyDTO } from "../dto/body/sign-up.dto";
import { SignUpResponseDTO } from "../dto/responses/sign-up-response.dto";

export class SignUpService {
  async execute({ name, email, password }: SignUpBodyDTO): Promise<SignUpResponseDTO > {
    console.log(password)
    return plainToInstance(SignUpResponseDTO, { id: 1, name, email })
  }
}
