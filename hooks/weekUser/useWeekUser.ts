import { getWeekUserRank } from 'lib/api/user/user.api';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { weekUserState } from 'store/user';
import { IWeekUserRank } from 'types/user.type';

const useWeekUser = () => {
  const [weekUser, setWeekUser] =
    useRecoilState<IWeekUserRank[]>(weekUserState);

  const getWeekUserList = useCallback(async () => {
    const { data } = await getWeekUserRank();
    setWeekUser(data);
  }, [setWeekUser]);

  useEffect(() => {
    getWeekUserList();
  }, [getWeekUserList]);

  return { weekUser };
};

export default useWeekUser;
