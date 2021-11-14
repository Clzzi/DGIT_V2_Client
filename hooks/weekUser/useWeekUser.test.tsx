import { customRenderHook } from 'util/customRenderHook';
import { MOCK_WEEKUSERS } from '__mocks__/data/users';
import useWeekUser from './useWeekUser';

describe('useWeekUser Testing', () => {
  it('Return Value Correctly', async () => {
    const { result, waitForNextUpdate } = customRenderHook(() => useWeekUser());
    await waitForNextUpdate();
    expect(result.current.weekUser).toEqual(MOCK_WEEKUSERS.data);
  });
});
