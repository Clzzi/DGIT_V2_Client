import { IUser } from './user.type';

export interface IRefreshToken {
  data: string;
}

export interface ILogin {
  refreshToken: string;
  token: string;
  user: IUser;
}
