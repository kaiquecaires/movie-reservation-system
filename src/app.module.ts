import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { MovieModule } from './modules/movie/movie.module';
import { SecurityModule } from './security/security.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MovieModule,
    SecurityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
