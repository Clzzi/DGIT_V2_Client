import { useMemo } from 'react';

const useProperty = () => {
  const propertyList: string[] = useMemo(() => {
    return ['순위', '프로필', '이름', '아이디', '기여도', 'Bio'];
  }, []);
  return { propertyList };
};

export default useProperty;
