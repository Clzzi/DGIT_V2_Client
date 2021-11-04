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

  const handleGithubId = useCallback(
    async (set: Dispatch<SetStateAction<boolean>>) => {
      if (input.length > 0) {
        try {
          await setGithubId({
            githubId: input,
          });
          await getTotalUser();
          await getWeekUserList();
          await handleGetWeekTopUser();
          set(false);
        } catch (e: any) {
          console.log(e);
        }
      }
    },
    [input, handleGetWeekTopUser, getTotalUser, getWeekUserList],
  );

  return [input, setInput, handleGithubId];
};

export default useAccount;
