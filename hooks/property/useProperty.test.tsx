import { RecoilRoot } from 'recoil';
import { act, renderHook } from '@testing-library/react-hooks';
import useProperty from './useProperty';

describe('useProperty Testing', () => {
  const wrapper = ({ children }: any) => {
    return <RecoilRoot>{children}</RecoilRoot>;
  };

  it('Return Value Correctly', () => {
    const { result } = renderHook(() => useProperty(), { wrapper });
    expect(
      result.current.propertyList ===
        ['순위', '프로필', '이름', '아이디', '기여도', 'Bio'],
    );
  });

  it('Act changePropertyList Funciton Correctly', () => {
    const { result } = renderHook(() => useProperty(), { wrapper });
    act(() => {
      result.current.changePropertyList('주간기록');
    });
    expect(
      result.current.propertyList ===
        ['날짜', '프로필', '이름', '아이디', '기여도', 'Bio'],
    );
  });
});
