import {
  ILoginResponse,
  IRefreshTokenResponse,
  loginDto,
  refreshTokenDto,
} from './auth.dto';
import { SERVER } from 'config/config.json';
import axios from 'axios';

export const getRefreshToken = async (
  dto: refreshTokenDto,
): Promise<IRefreshTokenResponse> => {
  const url: string = `${SERVER}/token/refresh`;
  const { data } = await axios.post<IRefreshTokenResponse>(url, dto);
  return data;
};

export const handleLogin = async (dto: loginDto): Promise<ILoginResponse> => {
  const url: string = `${SERVER}/auth/login`;
  const { data } = await axios.post<ILoginResponse>(url, dto);
  return data;
};
