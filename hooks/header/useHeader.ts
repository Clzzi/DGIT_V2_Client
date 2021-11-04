import { getTotalUserRank, getUserInfo } from 'lib/api/user/user.api';
import Toast from 'lib/toast';
import Token from 'lib/token';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isMyAccountState, userIdState, userState } from 'store/user';
import { IUser } from 'types/user.type';

const useHeader = () => {
  const [userId, setUserId] = useRecoilState<string[]>(userIdState);
  const [user, setUser] = useRecoilState<IUser>(userState);
  const [isMyAccount, setIsMyAccount] =
    useRecoilState<boolean>(isMyAccountState);

  const handleGetUserInfo = useCallback(async () => {
    try {
      const { data } = await getUserInfo();
      setUser(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, [setUser]);

  const handleGetList = useCallback(async () => {
    try {
      const { data } = await getTotalUserRank();
      let userIdArray: string[] = [];
      data.users.forEach((v) => {
        userIdArray.push(v.githubId);
        if (v.user.name === user.name) {
          setIsMyAccount(true);
          return;
        }
      });
      setUserId(userIdArray);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, [setIsMyAccount, user.name, setUserId]);

  useEffect(() => {
    if (Token.getToken('access_token')) {
      handleGetUserInfo();
      handleGetList();
    }
  }, [handleGetUserInfo, handleGetList]);

  return { user, userId, isMyAccount, handleGetList };
};

export default useHeader;
