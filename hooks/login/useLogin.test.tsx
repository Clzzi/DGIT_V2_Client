import useLogin from './useLogin';
import { customRenderHook } from 'util/customRenderHook';

describe('useLogin Testing', () => {
  it('Do Login and Location Change', async () => {
    const { result, waitFor } = customRenderHook(() => useLogin());
    await waitFor(() => {
      result.current.login('TESTING_CODE');
    });
    expect(window.location.href).toEqual('http://localhost/');
  });
});
