import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserAccount } from '../entities/UserAccount';
import { UserAccountService } from './user-account.service';
import { UserAccountDto } from './dto/user-account.dto';

@Controller('user-account')
export class UserAccountController {
  constructor(private readonly service: UserAccountService) {}

  @Post('create')
  async create(@Body() userAccountDto: UserAccountDto): Promise<UserAccount> {
    return this.service.create(userAccountDto);
  }

  @Get()
  async all(): Promise<UserAccount[]> {
    return this.service.all();
  }

  @Get('/:id')
  async one(@Param('id') id: string): Promise<UserAccount> {
    return this.service.one(id);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() userAccountDto: UserAccount) {
    return this.service.update(id, userAccountDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<UserAccount> {
    return this.service.delete(id);
  }
}
