import local from './local';
import { ThemeEnum } from 'enum/ThemeEnum';
import { THEME_KEY } from 'constants/theme.constants';

export const getTheme = (): ThemeEnum => {
  const mode = local.get(THEME_KEY);

  if (typeof window !== 'undefined' && mode === null) {
    const systemTheme: boolean = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    if (systemTheme) {
      return ThemeEnum.DARK;
    }
    return ThemeEnum.LIGHT;
  }

  const theme: ThemeEnum = Number(mode);

  if (theme === ThemeEnum.DARK) {
    return ThemeEnum.DARK;
  }

  return ThemeEnum.LIGHT;
};
