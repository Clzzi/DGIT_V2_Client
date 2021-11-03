import { ILogin } from 'types/auth.type';
import { IResponse } from 'types/response.type';

export interface refreshTokenDto {
  refreshToken: string;
}

export interface loginDto {
  code: string;
}

export interface IRefreshTokenResponse extends IResponse {
  data: string;
}

export interface ILoginResponse extends IResponse {
  data: ILogin;
}
