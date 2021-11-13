import { RecoilRoot } from 'recoil';
import useTotalUser from 'hooks/totalUser/useTotalUser';
import { act, renderHook } from '@testing-library/react-hooks';
import { MOCK_TOTALUSERS } from '__mocks__/data/users';

describe('useTotalUser Testing', () => {
  const wrapper = ({ children }: any) => {
    return <RecoilRoot>{children}</RecoilRoot>;
  };

  it('Return Value Correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTotalUser(), {
      wrapper,
    });
    await waitForNextUpdate();
    expect(result.current.totalUser).toEqual(MOCK_TOTALUSERS);
  });
});
