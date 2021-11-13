import Toast from 'lib/toast';
import { setGithubId } from 'lib/api/user/user.api';
import useHeader from 'hooks/header/useHeader';
import useWeekTop from 'hooks/weekTop/useWeekTop';
import useTotalUser from 'hooks/totalUser/useTotalUser';
import useWeekUser from 'hooks/weekUser/useWeekUser';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useAccount = (): [
  string,
  Dispatch<SetStateAction<string>>,
  (set: Dispatch<SetStateAction<boolean>>, isEdit: boolean) => Promise<void>,
  boolean,
] => {
  const [input, setInput] = useState<string>('');
  const [loading, setLoding] = useState<boolean>(false);
  const { setUserInfo } = useTotalUser();
  const { getWeekUserList } = useWeekUser();
  const { userId, handleGetList } = useHeader();
  const { handleGetWeekTopUser } = useWeekTop();

  const handleGithubId = useCallback(
    async (set: Dispatch<SetStateAction<boolean>>, isEdit: boolean) => {
      if (input.length <= 0) {
        Toast.errorToast('ID를 입력해주세요');
        return;
      }
      if (userId.indexOf(input) >= 0) {
        Toast.errorToast('등록된 아이디입니다. 관리자에게 문의해주세요');
        setInput('');
        return;
      }

      try {
        setLoding(true);
        await setGithubId({
          githubId: input,
        });
        await setUserInfo();
        await getWeekUserList();
        await handleGetWeekTopUser();
        await handleGetList();
        Toast.successToast(`계정이 ${isEdit ? '수정' : '추가'}되었습니다`);
      } catch (e: any) {
        Toast.errorToast(e.response.data.message);
      } finally {
        setLoding(false);
        set(false);
      }
    },
    [
      input,
      handleGetWeekTopUser,
      setUserInfo,
      getWeekUserList,
      handleGetList,
      userId,
    ],
  );

  return [input, setInput, handleGithubId, loading];
};

export default useAccount;
