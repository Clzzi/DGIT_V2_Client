import { getTotalUserRank, getUserInfo } from 'lib/api/user/user.api';
import Token from 'lib/token';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isMyAccountState, userState } from 'store/user';
import { IUser } from 'types/user.type';

const useHeader = () => {
  const [user, setUser] = useRecoilState<IUser>(userState);
  const [isMyAccount, setIsMyAccount] =
    useRecoilState<boolean>(isMyAccountState);

  const handleGetUserInfo = useCallback(async () => {
    try {
      const { data } = await getUserInfo();
      setUser(data);
    } catch (e: any) {
      console.log(e.data);
    }
  }, [setUser]);

  const handleGetList = useCallback(async () => {
    try {
      const { data } = await getTotalUserRank();
      data.users.forEach((v) => {
        if (v.user.name === user.name) {
          setIsMyAccount(true);
          return;
        }
      });
    } catch (e: any) {
      console.log(e.data);
    }
  }, [setIsMyAccount, user.name]);

  useEffect(() => {
    if (Token.getToken('access_token')) {
      handleGetUserInfo();
      handleGetList();
    }
  }, [handleGetUserInfo, handleGetList]);

  return { user, isMyAccount };
};

export default useHeader;
