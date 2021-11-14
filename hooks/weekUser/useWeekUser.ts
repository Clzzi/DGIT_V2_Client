import Toast from 'lib/toast';
import { useRecoilState } from 'recoil';
import { weekUserState } from 'store/user';
import { useCallback, useEffect } from 'react';
import { IWeekUserRank } from 'types/user.type';
import { getWeekUserRank } from 'lib/api/user/user.api';

const useWeekUser = () => {
  const [weekUser, setWeekUser] =
    useRecoilState<IWeekUserRank[]>(weekUserState);

  const getWeekUser = useCallback(async () => {
    try {
      const { data } = await getWeekUserRank();
      return data;
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, []);

  const getWeekUserList = useCallback(async () => {
    const data = await getWeekUser();
    data && setWeekUser(data);
  }, [getWeekUser, setWeekUser]);

  useEffect(() => {
    getWeekUserList();
  }, [getWeekUserList]);

  return { weekUser, getWeekUserList };
};

export default useWeekUser;
