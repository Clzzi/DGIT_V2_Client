import { getWeekTopUserList } from 'lib/api/user/user.api';
import Toast from 'lib/toast';
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
      Toast.errorToast(e.response.data.message);
    }
  }, [setWeekTopUser]);

  useEffect(() => {
    handleGetWeekTopUser();
  }, [handleGetWeekTopUser]);

  return { weekTopUser, handleGetWeekTopUser };
};

export default useWeekTop;
