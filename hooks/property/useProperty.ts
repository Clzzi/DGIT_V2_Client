import { useMemo } from 'react';

const useProperty = () => {
  // propertyList navState에 따라 다른거 리턴하게 만들어주자
  const propertyList: string[] = useMemo(() => {
    return ['순위', '프로필', '이름', '아이디', '기여도', 'Bio'];
  }, []);
  return { propertyList };
};

export default useProperty;
