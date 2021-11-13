import { RecoilRoot } from 'recoil';
import useTotalUser from 'hooks/totalUser/useTotalUser';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useTotalUser Testing', () => {
  const wrapper = ({ children }: any) => {
    return <RecoilRoot>{children}</RecoilRoot>;
  };

  it('Return Value Correctly', () => {
    const { result } = renderHook(() => useTotalUser(), { wrapper });
    const fn = require('lib/api/user/user.api');
    jest.mock('lib/api/user/user.api');

    console.log(result.current.totalUser);
  });
});
