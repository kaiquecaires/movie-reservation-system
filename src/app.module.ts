import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { MovieModule } from './modules/movie/movie.module';
import { SecurityModule } from './security/security.module';
import { RoomModule } from './modules/room/room.module';
import { SeatsModule } from './modules/seats/seats.module';
import { ShowTimesModule } from './modules/show-time/show-times.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MovieModule,
    SecurityModule,
    RoomModule,
    SeatsModule,
    ShowTimesModule
  ],
})
export class AppModule {}
