import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal } from "class-validator";

export class TotalPriceDTO {
  @ApiProperty({ example: 10.20, required: true })
  @IsDecimal({ decimal_digits: '2', force_decimal: true })
  total: string
}
