import { useCallback, useEffect } from 'react';
import { isMyAccountState, totalUserState } from 'store/user';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ITotalUserRank } from 'types/user.type';
import { getTotalUserRank } from 'lib/api/user/user.api';
import useHeader from 'hooks/header/useHeader';

const useTotalUser = () => {
  const { user } = useHeader();
  const [totalUser, setTotalUser] =
    useRecoilState<ITotalUserRank>(totalUserState);
  const setIsMyAccount = useSetRecoilState<boolean>(isMyAccountState);

  const checkIsMyAccount = useCallback(() => {
    totalUser.users &&
      totalUser.users.forEach((v) => {
        if (user.name === v.user.name) {
          setIsMyAccount(true);
          return;
        }
      });
  }, [user.name, setIsMyAccount, totalUser.users]);

  const getTotalUser = useCallback(async () => {
    try {
      const { data } = await getTotalUserRank();
      setTotalUser(data);
    } catch (e: any) {
      console.log(e.data);
    }
  }, [setTotalUser]);

  useEffect(() => {
    checkIsMyAccount();
  }, [totalUser, checkIsMyAccount]);

  useEffect(() => {
    getTotalUser();
  }, [getTotalUser]);

  return {
    totalUser,
  };
};

export default useTotalUser;
