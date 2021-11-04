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
] => {
  const [input, setInput] = useState<string>('');
  const { handleGetWeekTopUser } = useWeekTop();
  const { getWeekUserList } = useWeekUser();
  const { getTotalUser } = useTotalUser();
  const { userId, handleGetList } = useHeader();

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
        await setGithubId({
          githubId: input,
        });
        await getTotalUser();
        await getWeekUserList();
        await handleGetWeekTopUser();
        await handleGetList();
        set(false);
        Toast.successToast(`계정이 ${isEdit ? '수정' : '추가'}되었습니다`);
      } catch (e: any) {
        Toast.errorToast(e.response.data.message);
      }
    },
    [
      input,
      handleGetWeekTopUser,
      getTotalUser,
      getWeekUserList,
      handleGetList,
      userId,
    ],
  );

  return [input, setInput, handleGithubId];
};

export default useAccount;
