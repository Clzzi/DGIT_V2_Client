import { handleLogin } from 'lib/api/auth/auth.api';
import { loginDto } from 'lib/api/auth/auth.dto';
import Token from 'lib/token';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from 'store/user';
import { ILogin } from 'types/auth.type';

const useLogin = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState<ILogin>(userState);
  const login = useCallback(
    async (code: string) => {
      const dto: loginDto = {
        code,
      };
      try {
        const { data } = await handleLogin(dto);
        Token.setToken('access_token', data.token);
        Token.setToken('refresh_token', data.refreshToken);
        setUser(data);
        router.push('/');
      } catch (e: any) {
        console.log(e.data);
      }
    },
    [setUser, router],
  );

  return {
    login,
    user,
  };
};

export default useLogin;
