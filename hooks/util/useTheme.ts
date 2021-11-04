import local from 'util/local';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { getTheme } from 'util/getTheme';
import { themeMode } from 'store/theme';
import { ThemeEnum } from 'enum/ThemeEnum';
import { darkTheme, lightTheme } from 'styles/ThemeConfig';
import { DefaultTheme } from 'styled-components';
import { THEME_KEY } from 'constants/theme.constants';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ThemeEnum>(themeMode);

  const handleChangeTheme = useCallback((): void => {
    if (currentTheme === ThemeEnum.DARK) {
      local.set(THEME_KEY, ThemeEnum.LIGHT.toString());
      setCurrentTheme(ThemeEnum.LIGHT);
      return;
    }

    local.set(THEME_KEY, ThemeEnum.DARK.toString());
    setCurrentTheme(ThemeEnum.DARK);
  }, [setCurrentTheme, currentTheme]);

  const theme: DefaultTheme = getTheme() ? darkTheme : lightTheme;

  return { theme, currentTheme, handleChangeTheme };
};

export default useTheme;
