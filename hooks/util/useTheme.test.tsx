import useTheme from './useTheme';
import { act } from '@testing-library/react-hooks';
import { darkTheme, lightTheme } from 'styles/ThemeConfig';
import { customRenderHook } from 'util/customRenderHook';

describe('TEST useTheme', () => {
  it('return Value Correctly on LightMode', () => {
    const { result } = customRenderHook(() => useTheme());
    expect(result.current.theme).toEqual(lightTheme);
    expect(result.current.currentTheme).toEqual(0);
  });

  it('return Value Correctly on DarkMode', () => {
    const { result } = customRenderHook(() => useTheme());
    act(() => result.current.handleChangeTheme());
    expect(result.current.theme).toEqual(darkTheme);
    expect(result.current.currentTheme).toEqual(1);
  });
});
