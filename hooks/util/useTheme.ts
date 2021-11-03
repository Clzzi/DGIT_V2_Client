import local from 'util/local';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { getTheme } from 'util/getTheme';
import { themeMode } from 'store/theme';
import { ThemeEnum } from 'enum/ThemeEnum';
import { darkTheme, lightTheme } from 'styles/ThemeConfig';
import { DefaultTheme } from 'styled-components';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ThemeEnum>(themeMode);

  const handleChangeTheme = useCallback((): void => {
    if (currentTheme === ThemeEnum.DARK) {
      local.set('theme', '0');
      setCurrentTheme(ThemeEnum.LIGHT);
      return;
    }

    local.set('theme', '1');
    setCurrentTheme(ThemeEnum.DARK);
  }, [ThemeEnum, setCurrentTheme, currentTheme]);

  const theme: DefaultTheme = getTheme() ? darkTheme : lightTheme;

  return { theme, currentTheme, handleChangeTheme };
};

export default useTheme;
