import { setGithubId } from 'lib/api/user/user.api';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useAccount = (): [
  string,
  Dispatch<SetStateAction<string>>,
  () => Promise<void>,
] => {
  const [input, setInput] = useState<string>('');

  const handleGithubId = useCallback(async () => {
    console.log(input);
    if (input.length > 0) {
      try {
        await setGithubId({
          githubId: input,
        });
      } catch (e: any) {
        console.log(e);
      }
    }
  }, [input]);

  return [input, setInput, handleGithubId];
};

export default useAccount;
