import {
  ACCESS_TOKEN_KEY,
  ALLOWCORS_KEY,
  TOKEN_HEADER_KEY,
} from 'constants/auth.constants';
import Token from 'lib/token';
import CONFIG from 'config/config.json';
import axios, { AxiosInstance } from 'axios';
import requestHandler from './requestHandler';
import { getBearer } from 'util/getBearer';

const axiosClient: AxiosInstance = axios.create({
  baseURL: CONFIG.SERVER,
  headers: {
    [ALLOWCORS_KEY]: '*',
    [TOKEN_HEADER_KEY]: getBearer(Token.getToken(ACCESS_TOKEN_KEY)!),
  },
});

axiosClient.interceptors.request.use(requestHandler);

export default axiosClient;
