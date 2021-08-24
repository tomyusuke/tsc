import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from '../entities/UserAccount';
import { Repository } from 'typeorm';
import { UserAccountDto } from './dto/user-account.dto';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectRepository(UserAccount)
    private readonly repo: Repository<UserAccount>,
  ) {}

  async all(): Promise<UserAccount[]> {
    return this.repo.find();
  }

  async create(data: UserAccountDto) {
    return this.repo.save(data);
  }
}
