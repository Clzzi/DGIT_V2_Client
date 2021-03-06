import { navState } from 'store/nav';
import { useRecoilValue } from 'recoil';
import { TNav, TProperty } from 'types/common.type';
import { useCallback, useEffect, useState } from 'react';

const useProperty = () => {
  const nav = useRecoilValue<TNav>(navState);
  const [propertyList, setPropertyList] = useState<TProperty[]>([
    '순위',
    '프로필',
    '이름',
    '아이디',
    '기여도',
    'Bio',
  ]);

  const changePropertyList = useCallback(
    (nav: TNav) => {
      if (nav === '주간기록') {
        setPropertyList(['날짜', '프로필', '이름', '아이디', '기여도', 'Bio']);
      } else {
        // 주간 || 종합
        setPropertyList(['순위', '프로필', '이름', '아이디', '기여도', 'Bio']);
      }
    },
    [setPropertyList],
  );

  useEffect(() => {
    changePropertyList(nav);
  }, [nav, changePropertyList]);

  return { propertyList, changePropertyList };
};

export default useProperty;
