import { AxiosRequestConfig } from 'axios';
import { getRefreshToken } from 'lib/api/auth/auth.api';
import Token from 'lib/token';
import { IRefreshToken } from 'types/auth.type';

const requestHandler = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  let accessToken: string | null = Token.getToken('access-token');

  if (accessToken) {
    const decode: any = Token.decodeToken('access-token');
    const nowDate: number = Date.now() / 1000;

    if (decode.exp < nowDate) {
      const data: IRefreshToken = await getRefreshToken({
        refreshToken: accessToken,
      });
      Token.setToken('access_token', data.data);
      accessToken = data.data;
    }
    config.headers!['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};

export default requestHandler;
