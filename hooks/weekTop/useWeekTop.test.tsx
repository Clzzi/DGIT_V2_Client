import { customRenderHook } from 'util/customRenderHook';
import { MOCK_WEEKTOPUSERS } from '__mocks__/data/users';
import useWeekTop from './useWeekTop';

describe('useWeekTop Testing', () => {
  it('Return Value Correctly', async () => {
    const { result, waitForNextUpdate } = customRenderHook(() => useWeekTop());
    await waitForNextUpdate();
    expect(result.current.weekTopUser).toEqual(MOCK_WEEKTOPUSERS.data);
  });
});
