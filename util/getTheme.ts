import { ThemeEnum } from 'enum/ThemeEnum';
import local from './local';

const { LIGHT, DARK } = ThemeEnum;

export const getTheme = (): ThemeEnum => {
  const theme: ThemeEnum = Number(local.get('theme'));

  if (theme === DARK) {
    return DARK;
  }

  return LIGHT;
};
