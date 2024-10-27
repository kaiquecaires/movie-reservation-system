import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthAdminStrategy } from "./auth-admin.strategy";

@Module({
  imports: [PassportModule],
  providers: [AuthAdminStrategy]
})
export class SecurityModule {}
