import { act } from '@testing-library/react-hooks';
import useProperty from './useProperty';
import { customRenderHook } from 'util/customRenderHook';

describe('useProperty Testing', () => {
  it('Return Value Correctly', () => {
    const { result } = customRenderHook(() => useProperty());
    expect(
      result.current.propertyList ===
        ['순위', '프로필', '이름', '아이디', '기여도', 'Bio'],
    );
  });

  it('Act changePropertyList Funciton Correctly', () => {
    const { result } = customRenderHook(() => useProperty());
    act(() => {
      result.current.changePropertyList('주간기록');
    });
    expect(
      result.current.propertyList ===
        ['날짜', '프로필', '이름', '아이디', '기여도', 'Bio'],
    );
  });
});
