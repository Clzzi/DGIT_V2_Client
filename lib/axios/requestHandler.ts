import Token from 'lib/token';
import { AxiosRequestConfig } from 'axios';
import { IRefreshToken } from 'types/auth.type';
import { getRefreshToken } from 'lib/api/auth/auth.api';

const requestHandler = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  let accessToken: string | null = Token.getToken('access_token');
  let usingRefreshToken: string | null = Token.getToken('refresh_token');

  if (accessToken && usingRefreshToken) {
    const decode: any = Token.decodeToken('access_token');
    const nowDate: number = Date.now() / 1000;

    if (decode.exp < nowDate) {
      const data: IRefreshToken = await getRefreshToken({
        refreshToken: usingRefreshToken,
      });
      Token.setToken('access_token', data.data);
      accessToken = data.data;
    }
    config.headers!['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};

export default requestHandler;
