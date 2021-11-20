import { ILoginResponse } from 'lib/api/auth/auth.dto';
import { IGetUserInfoResponse } from 'lib/api/user/user.dto';

export const MOCK_TOKEN: ILoginResponse = {
  status: 200,
  message: '로그인 성공',
  data: {
    refreshToken: 'refresh_token_value',
    token: 'access_token_value',
    user: { id: 'user_id_value', name: '손민재' },
  },
};

export const MOCK_INFO: IGetUserInfoResponse = {
  status: 200,
  message: '자신의 정보 가져오기 성공',
  data: {
    id: 'user_id_value',
    name: '손민재',
  },
};

export const MOCK_REFRESHTOKEN = {
  status: 200,
  message: '토큰 재발급 성공',
  data: 'REFRESH_TOKEN',
};
