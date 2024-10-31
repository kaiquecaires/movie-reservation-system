import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { MovieModule } from './modules/movie/movie.module';
import { SecurityModule } from './security/security.module';
import { RoomModule } from './modules/room/room.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MovieModule,
    SecurityModule,
    RoomModule
  ],
})
export class AppModule {}
