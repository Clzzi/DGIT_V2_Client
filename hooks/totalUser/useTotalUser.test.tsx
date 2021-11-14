import useTotalUser from 'hooks/totalUser/useTotalUser';
import { MOCK_TOTALUSERS } from '__mocks__/data/users';
import { customRenderHook } from 'util/customRenderHook';

describe('useTotalUser Testing', () => {
  it('Return Value Correctly', async () => {
    const { result, waitForNextUpdate } = customRenderHook(() =>
      useTotalUser(),
    );
    await waitForNextUpdate();
    expect(result.current.totalUser).toEqual(MOCK_TOTALUSERS.data);
  });
});
