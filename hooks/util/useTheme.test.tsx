import useTheme from './useTheme';
import { act } from '@testing-library/react-hooks';
import { darkTheme, lightTheme } from 'styles/ThemeConfig';
import { customRenderHook } from 'util/customRenderHook';
import local from 'util/local';
import { THEME_KEY } from 'constants/theme.constants';
import { ThemeEnum } from 'enum/ThemeEnum';
import '__mocks__/matchMedia';

describe('TEST useTheme', () => {
  it('return Value Correctly on LightMode(system)', () => {
    const { result } = customRenderHook(() => useTheme());
    expect(result.current.theme).toEqual(lightTheme);
    expect(result.current.currentTheme).toEqual(0);
  });

  it('return Value Correctly on DarkMode(system)', () => {
    const { result } = customRenderHook(() => useTheme());
    act(() => result.current.handleChangeTheme());
    expect(result.current.theme).toEqual(darkTheme);
    expect(result.current.currentTheme).toEqual(1);
  });

  it('return Value Correctly on LightMode(localStorage)', () => {
    local.set(THEME_KEY, ThemeEnum.LIGHT.toString());
    const { result } = customRenderHook(() => useTheme());
    expect(result.current.theme).toEqual(lightTheme);
    expect(result.current.currentTheme).toEqual(0);
  });

  it('return Value Correctly on DarkMode(localStorage)', () => {
    local.set(THEME_KEY, ThemeEnum.DARK.toString());
    const { result } = customRenderHook(() => useTheme());
    act(() => result.current.handleChangeTheme());
    expect(result.current.theme).toEqual(darkTheme);
    expect(result.current.currentTheme).toEqual(1);
  });
});
