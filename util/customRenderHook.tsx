import { renderHook } from '@testing-library/react-hooks';
import { RenderHookOptions } from '@testing-library/react-hooks/lib/types';
import { RecoilRoot } from 'recoil';

const wrapper = ({ children }: any) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export const customRenderHook = <T extends unknown>(
  ui: (props: T) => T,
  options?: RenderHookOptions<T>,
) => renderHook(ui, { wrapper, ...options });
