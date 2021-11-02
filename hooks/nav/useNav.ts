import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { navState } from 'store/nav';
import { TNav } from 'types/common.type';

const useNav = (): [TNav, (value: TNav) => void] => {
  const [nav, setNav] = useRecoilState<TNav>(navState);

  const onChangeNav = useCallback(
    (value: TNav) => {
      setNav(value);
    },
    [setNav],
  );

  return [nav, onChangeNav];
};

export default useNav;
