import local from './local';
import { ThemeEnum } from 'enum/ThemeEnum';
import { THEME_KEY } from 'constants/theme.constants';

export const getTheme = (): ThemeEnum => {
  const theme: ThemeEnum = Number(local.get(THEME_KEY));
  if (theme === ThemeEnum.DARK) {
    return ThemeEnum.DARK;
  }

  return ThemeEnum.LIGHT;
};
