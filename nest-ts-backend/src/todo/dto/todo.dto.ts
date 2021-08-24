import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { UserAccount } from 'src/entities/UserAccount';

export class TodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  isFinished: boolean;

  @IsNotEmpty()
  @IsString()
  userAccountId: string;

  userAccount: UserAccount;

  constructor(
    title: string,
    isFinished: boolean,
    userAccountId: string,
    userAccount: UserAccount,
  ) {
    this.title = title;
    this.isFinished = isFinished;
    this.userAccountId = userAccountId;
    this.userAccount = userAccount;
  }
}
