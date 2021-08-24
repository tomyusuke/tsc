import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccountModule } from './user-account/user-account.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UserAccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
