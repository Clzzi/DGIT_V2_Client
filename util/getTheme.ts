import local from './local';
import { ThemeEnum } from 'enum/ThemeEnum';

export const getTheme = (): ThemeEnum => {
  const theme: ThemeEnum = Number(local.get('theme'));

  if (theme === ThemeEnum.DARK) {
    return ThemeEnum.DARK;
  }

  return ThemeEnum.LIGHT;
};
