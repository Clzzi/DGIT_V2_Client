import useNav from './useNav';
import { act } from '@testing-library/react-hooks';
import { customRenderHook } from 'util/customRenderHook';

describe('useNav Testing', () => {
  it('Return Value Correctly', () => {
    const { result } = customRenderHook(() => useNav());
    expect(result.current[0]).toBe('종합');
  });

  it('Act onChangeNav Function Correctly', () => {
    const { result } = customRenderHook(() => useNav());
    act(() => {
      result.current[1]('주간기록');
    });
    expect(result.current[0]).toBe('주간기록');
  });
});
