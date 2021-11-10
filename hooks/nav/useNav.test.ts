import { renderHook } from '@testing-library/react-hooks';
import useNav from './useNav';

describe('useNav Testing', () => {
  it('Return Value Correctly', () => {
    const { result } = renderHook(() => useNav());
    console.log(result.current);
  });
});
