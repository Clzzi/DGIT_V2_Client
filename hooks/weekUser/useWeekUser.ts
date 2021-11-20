import Toast from 'lib/toast';
import { useRecoilState } from 'recoil';
import { weekUserState } from 'store/user';
import { useCallback, useEffect } from 'react';
import { IWeekUserRank } from 'types/user.type';
import { getWeekUserRank } from 'lib/api/user/user.api';

const useWeekUser = () => {
  const [weekUser, setWeekUser] =
    useRecoilState<IWeekUserRank[]>(weekUserState);

  const getWeekUserList = useCallback(async () => {
    try {
      const { data } = await getWeekUserRank();
      setWeekUser(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, [setWeekUser]);

  useEffect(() => {
    getWeekUserList();
  }, [getWeekUserList]);

  return { weekUser, getWeekUserList };
};

export default useWeekUser;
