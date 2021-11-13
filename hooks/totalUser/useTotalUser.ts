import { useCallback, useEffect } from 'react';
import { totalUserState } from 'store/user';
import { useRecoilState } from 'recoil';
import { ITotalUserRank } from 'types/user.type';
import { getTotalUserRank } from 'lib/api/user/user.api';
import Toast from 'lib/toast';

const useTotalUser = () => {
  const [totalUser, setTotalUser] =
    useRecoilState<ITotalUserRank>(totalUserState);

  const getTotalUser = useCallback(async () => {
    try {
      const { data } = await getTotalUserRank();
      return data;
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, []);

  const setUserInfo = useCallback(async () => {
    const data = await getTotalUser();
    data && setTotalUser(data);
  }, [getTotalUser, setTotalUser]);

  useEffect(() => {
    setUserInfo();
  }, [setUserInfo]);

  return {
    totalUser,
    setUserInfo,
  };
};

export default useTotalUser;
