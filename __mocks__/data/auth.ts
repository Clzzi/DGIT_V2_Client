import { ILogin } from 'types/auth.type';

export const MOCK_TOKEN: ILogin = {
  refreshToken: 'refresh_token_value',
  token: 'access_token_value',
  user: { id: 'user_id_value', name: '손민재' },
};

export const MOCK_INFO = {
  id: 'user_id_value',
  name: '손민재',
};
