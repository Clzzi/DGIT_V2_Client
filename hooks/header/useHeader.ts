import Toast from 'lib/toast';
import Token from 'lib/token';
import { useRecoilState } from 'recoil';
import { ITotalUser, IUser } from 'types/user.type';
import { useCallback, useEffect } from 'react';
import { getTotalUserRank, getUserInfo } from 'lib/api/user/user.api';
import { isMyAccountState, userIdState, userState } from 'store/user';
import { ACCESS_TOKEN_KEY } from 'constants/token.constants';

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

  const checkMyAccount = useCallback(
    (name: string) => {
      if (name === user.name) {
        setIsMyAccount(true);
      }
    },
    [setIsMyAccount, user.name],
  );

  const getUserIdList = useCallback(
    (userList: ITotalUser[]) => {
      let idArray: string[] = [];

      userList.forEach((user) => {
        idArray.push(user.user.name);
        checkMyAccount(user.user.name);
      });

      return idArray;
    },
    [checkMyAccount],
  );

  const handleGetList = useCallback(async () => {
    try {
      const { data } = await getTotalUserRank();
      const idArray = getUserIdList(data.users);
      setUserId(idArray);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, [setUserId, getUserIdList]);

  useEffect(() => {
    if (Token.getToken(ACCESS_TOKEN_KEY)) {
      handleGetUserInfo();
      handleGetList();
    }
  }, [handleGetUserInfo, handleGetList]);

  return { user, userId, isMyAccount, handleGetList };
};

export default useHeader;
