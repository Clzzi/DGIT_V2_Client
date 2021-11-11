import { RecoilRoot } from 'recoil';
import { act, renderHook } from '@testing-library/react-hooks';
import useNav from './useNav';

describe('useNav Testing', () => {
  const wrapper = ({ children }: any) => {
    return <RecoilRoot>{children}</RecoilRoot>;
  };

  it('Return Value Correctly', () => {
    const { result } = renderHook(() => useNav(), { wrapper });
    expect(result.current[0]).toBe('종합');
  });

  it('Act onChangeNav Function Correctly', () => {
    const { result } = renderHook(() => useNav(), { wrapper });
    act(() => {
      result.current[1]('주간기록');
    });
    expect(result.current[0]).toBe('주간기록');
  });
});
