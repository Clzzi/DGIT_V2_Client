import { getWeekTopUserList } from 'lib/api/user/user.api';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { weekTopUserState } from 'store/user';
import { IWeekTopList } from 'types/user.type';

const useWeekTop = () => {
  const [weekTopUser, setWeekTopUser] =
    useRecoilState<IWeekTopList[]>(weekTopUserState);

  const handleGetWeekTopUser = useCallback(async () => {
    try {
      const { data } = await getWeekTopUserList();
      setWeekTopUser(data);
    } catch (e: any) {
      console.log(e);
    }
  }, [setWeekTopUser]);

  useEffect(() => {
    handleGetWeekTopUser();
  }, [handleGetWeekTopUser]);

  return { weekTopUser };
};

export default useWeekTop;
