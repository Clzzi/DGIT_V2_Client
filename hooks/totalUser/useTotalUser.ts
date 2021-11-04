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
      setTotalUser(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, [setTotalUser]);

  useEffect(() => {
    getTotalUser();
  }, [getTotalUser]);

  return {
    totalUser,
    getTotalUser,
  };
};

export default useTotalUser;
