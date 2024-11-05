import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthAdminStrategy } from "./auth-admin.strategy";
import { AuthStrategy } from "./auth.strategy";

@Module({
  imports: [PassportModule],
  providers: [AuthAdminStrategy, AuthStrategy]
})
export class SecurityModule {}
