import { getUserInfo } from 'lib/api/user/user.api';
import Token from 'lib/token';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from 'store/user';
import { IUser } from 'types/user.type';

const useHeader = () => {
  const [user, setUser] = useRecoilState<IUser>(userState);

  const handleGetUserInfo = useCallback(async () => {
    try {
      const { data } = await getUserInfo();
      setUser(data);
    } catch (e: any) {
      console.log(e.data);
    }
  }, [setUser]);

  useEffect(() => {
    if (Token.getToken('access_token')) {
      handleGetUserInfo();
    }
  }, [handleGetUserInfo]);

  return { user };
};

export default useHeader;
