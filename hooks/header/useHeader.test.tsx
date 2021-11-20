import { customRenderHook } from 'util/customRenderHook';
import { MOCK_INFO } from '__mocks__/data/auth';
import useHeader from './useHeader';

describe('useHeader Testing', () => {
  beforeEach(() => {
    localStorage.setItem('access_token', 'testToken');
  });
  it('Return Value Correctly', async () => {
    const { result, waitForValueToChange } = customRenderHook(() =>
      useHeader(),
    );
    await waitForValueToChange(() => result.current.userId);
    expect(result.current.userId).toEqual(['손민재', 'USER']);
    await waitForValueToChange(() => result.current.user);
    expect(result.current.user).toEqual(MOCK_INFO.data);
    expect(result.current.isMyAccount).toEqual(true);
  });
});
