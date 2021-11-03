import { useCallback, useEffect } from 'react';
import { totalUserState } from 'store/user';
import { useRecoilState } from 'recoil';
import { ITotalUserRank } from 'types/user.type';
import { getTotalUserRank } from 'lib/api/user/user.api';
import useFilter from 'hooks/filter/useFilter';

const useTotalUser = () => {
  const [totalUser, setTotalUser] =
    useRecoilState<ITotalUserRank>(totalUserState);
  const [filter] = useFilter();

  const getTotalUser = useCallback(async () => {
    try {
      const { data } = await getTotalUserRank();
      setTotalUser(data);
    } catch (e: any) {
      console.log(e.data);
    }
  }, [setTotalUser]);

  useEffect(() => {
    getTotalUser();
  }, [getTotalUser]);

  return {
    totalUser,
  };
};

export default useTotalUser;
