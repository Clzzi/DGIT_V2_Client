import { handleLogin } from 'lib/api/auth/auth.api';
import { loginDto } from 'lib/api/auth/auth.dto';
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
      } catch (e: any) {
        console.log(e.data);
      }
    },
    [router],
  );

  return {
    login,
  };
};

export default useLogin;
