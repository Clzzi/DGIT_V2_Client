import Toast from 'lib/toast';
import { useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { IWeekTopList } from 'types/user.type';
import { weekTopUserState } from 'store/user';
import { getWeekTopUserList } from 'lib/api/user/user.api';

const useWeekTop = () => {
  const [weekTopUser, setWeekTopUser] =
    useRecoilState<IWeekTopList[]>(weekTopUserState);

  const handleGetWeekTopUser = useCallback(async () => {
    try {
      const { data } = await getWeekTopUserList();
      setWeekTopUser(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  }, [setWeekTopUser]);

  useEffect(() => {
    handleGetWeekTopUser();
  }, [handleGetWeekTopUser]);

  return { weekTopUser, handleGetWeekTopUser };
};

export default useWeekTop;
