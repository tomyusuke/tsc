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

  async one(id: string): Promise<UserAccount> {
    return this.repo.findOne(id);
  }

  async create(data: UserAccountDto): Promise<UserAccount> {
    return this.repo.save(data);
  }

  async delete(id: string): Promise<UserAccount> {
    const user = await this.repo.findOne(id);
    return this.repo.remove(user);
  }

  async update(id: string, data: UserAccountDto): Promise<UserAccount> {
    const user = await this.repo.findOne(id);
    return this.repo.save({ ...user, ...data });
  }
}
