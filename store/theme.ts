import { atom } from 'recoil';
import { ThemeEnum } from 'enum/ThemeEnum';
import { getTheme } from 'util/getTheme';

export const themeMode = atom<ThemeEnum>({
  key: 'themeMode',
  default: getTheme(),
});
