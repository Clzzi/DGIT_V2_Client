import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_HEADER_KEY,
} from 'constants/auth.constants';
import Token from 'lib/token';
import { AxiosRequestConfig } from 'axios';
import { IRefreshToken } from 'types/auth.type';
import { getRefreshToken } from 'lib/api/auth/auth.api';

const requestHandler = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  let accessToken: string | null = Token.getToken(ACCESS_TOKEN_KEY);
  let usingRefreshToken: string | null = Token.getToken(REFRESH_TOKEN_KEY);

  if (accessToken && usingRefreshToken) {
    const decode: any = Token.decodeToken(ACCESS_TOKEN_KEY);
    const nowDate: number = Date.now() / 1000;

    if (decode.exp < nowDate) {
      const data: IRefreshToken = await getRefreshToken({
        refreshToken: usingRefreshToken,
      });
      Token.setToken(ACCESS_TOKEN_KEY, data.data);
      accessToken = data.data;
    }
    config.headers![TOKEN_HEADER_KEY] = `Bearer ${accessToken}`;
  }

  return config;
};

export default requestHandler;
