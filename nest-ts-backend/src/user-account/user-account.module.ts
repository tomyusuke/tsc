import { Module } from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import { UserAccountController } from './user-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccount } from '../entities/UserAccount';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccount])],
  exports: [TypeOrmModule],
  providers: [UserAccountService],
  controllers: [UserAccountController],
})
export class UserAccountModule {}
