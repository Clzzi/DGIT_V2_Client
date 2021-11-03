import axiosClient from 'lib/axios/axiosClient';
import {
  ILoginResponse,
  IRefreshTokenResponse,
  loginDto,
  refreshTokenDto,
} from './auth.dto';

export const getRefreshToken = async (
  dto: refreshTokenDto,
): Promise<IRefreshTokenResponse> => {
  const url: string = '/token/refresh';
  const { data } = await axiosClient.post<IRefreshTokenResponse>(url, dto);
  return data;
};

export const handleLogin = async (dto: loginDto): Promise<ILoginResponse> => {
  const url: string = '/auth/login';
  const { data } = await axiosClient.post<ILoginResponse>(url, dto);
  return data;
};
