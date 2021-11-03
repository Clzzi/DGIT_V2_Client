import axios, { AxiosInstance } from 'axios';
import CONFIG from 'config/config.json';
import Token from 'lib/token';
import requestHandler from './requestHandler';

const axiosClient: AxiosInstance = axios.create({
  baseURL: CONFIG.SERVER,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${Token.getToken('access_token')}`,
  },
});

axiosClient.interceptors.request.use(requestHandler);

export default axiosClient;
