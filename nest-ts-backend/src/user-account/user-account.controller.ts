import { Body, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserAccount } from '../entities/UserAccount';
import { UserAccountService } from './user-account.service';
import { UserAccountDto } from './dto/user-account.dto';

@Controller('user-account')
export class UserAccountController {
  constructor(private readonly service: UserAccountService) {}

  @Get()
  all(): Promise<UserAccount[]> {
    return this.service.all();
  }

  @Post('create')
  async create(@Body() userAccountDto: UserAccountDto): Promise<UserAccount> {
    return this.service.create(userAccountDto);
  }
}
