import useHeader from 'hooks/header/useHeader';
import useTotalUser from 'hooks/totalUser/useTotalUser';
import useWeekTop from 'hooks/weekTop/useWeekTop';
import useWeekUser from 'hooks/weekUser/useWeekUser';
import { setGithubId } from 'lib/api/user/user.api';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useAccount = (): [
  string,
  Dispatch<SetStateAction<string>>,
  (set: Dispatch<SetStateAction<boolean>>) => Promise<void>,
] => {
  const [input, setInput] = useState<string>('');
  const { handleGetWeekTopUser } = useWeekTop();
  const { getWeekUserList } = useWeekUser();
  const { getTotalUser } = useTotalUser();
  const { userId, handleGetList } = useHeader();

  const handleGithubId = useCallback(
    async (set: Dispatch<SetStateAction<boolean>>) => {
      if (input.length <= 0) {
        return;
      }
      if (userId.indexOf(input) >= 0) {
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
      } catch (e: any) {
        console.log(e);
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
