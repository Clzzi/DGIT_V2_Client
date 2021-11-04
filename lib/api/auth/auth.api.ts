import {
  loginDto,
  ILoginResponse,
  refreshTokenDto,
  IRefreshTokenResponse,
} from './auth.dto';
import axios from 'axios';

export const getRefreshToken = async (
  dto: refreshTokenDto,
): Promise<IRefreshTokenResponse> => {
  const url: string = `${process.env.NEXT_PUBLIC_SERVER}/token/refresh`;
  const { data } = await axios.post<IRefreshTokenResponse>(url, dto);
  return data;
};

export const handleLogin = async (dto: loginDto): Promise<ILoginResponse> => {
  const url: string = `${process.env.NEXT_PUBLIC_SERVER}/auth/login`;
  const { data } = await axios.post<ILoginResponse>(url, dto);
  return data;
};
