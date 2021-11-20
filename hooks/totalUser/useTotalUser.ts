import { useCallback, useEffect } from 'react';
import { totalUserState } from 'store/user';
import { useRecoilState } from 'recoil';
import { ITotalUserRank } from 'types/user.type';
import { getTotalUserRank } from 'lib/api/user/user.api';
import Toast from 'lib/toast';

const useTotalUser = () => {
  const [totalUser, setTotalUser] =
    useRecoilState<ITotalUserRank>(totalUserState);

  const setUserInfo = useCallback(async () => {
    try {
      const { data } = await getTotalUserRank();
      setTotalUser(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, [setTotalUser]);

  useEffect(() => {
    setUserInfo();
  }, [setUserInfo]);

  return {
    totalUser,
    setUserInfo,
  };
};

export default useTotalUser;
