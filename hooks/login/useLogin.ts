import { handleLogin } from 'lib/api/auth/auth.api';
import { loginDto } from 'lib/api/auth/auth.dto';
import Toast from 'lib/toast';
import Token from 'lib/token';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useLogin = () => {
  const router = useRouter();

  const login = useCallback(
    async (code: string) => {
      const dto: loginDto = {
        code,
      };
      try {
        const { data } = await handleLogin(dto);
        Token.setToken('access_token', data.token);
        Token.setToken('refresh_token', data.refreshToken);
        router.push('/');
        Toast.successToast('로그인 되었습니다');
      } catch (e: any) {
        Toast.errorToast(e.response.data.message);
      }
    },
    [router],
  );

  return {
    login,
  };
};

export default useLogin;
