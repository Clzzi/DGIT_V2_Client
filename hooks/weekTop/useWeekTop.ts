import Toast from 'lib/toast';
import { useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { IWeekTopList } from 'types/user.type';
import { weekTopUserState } from 'store/user';
import { getWeekTopUserList } from 'lib/api/user/user.api';

const useWeekTop = () => {
  const [weekTopUser, setWeekTopUser] =
    useRecoilState<IWeekTopList[]>(weekTopUserState);

  const getWeekTopUser = useCallback(async () => {
    try {
      const { data } = await getWeekTopUserList();
      return data;
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, []);

  const handleGetWeekTopUser = useCallback(async () => {
    try {
      const data = await getWeekTopUser();
      data && setWeekTopUser(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, [getWeekTopUser, setWeekTopUser]);

  useEffect(() => {
    handleGetWeekTopUser();
  }, [handleGetWeekTopUser]);

  return { weekTopUser, handleGetWeekTopUser };
};

export default useWeekTop;
