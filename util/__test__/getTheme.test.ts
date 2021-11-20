import local from 'util/local';
import { getTheme } from 'util/getTheme';
import { ThemeEnum } from 'enum/ThemeEnum';
import { THEME_KEY } from 'constants/theme.constants';

describe('TEST getTheme', () => {
  it('Check ThemeEnum', () => {
    expect(ThemeEnum.LIGHT).toEqual(0);
    expect(ThemeEnum.DARK).toEqual(1);
  });

  it('Check LIGHT Theme', () => {
    local.set(THEME_KEY, ThemeEnum.LIGHT.toString());
    expect(getTheme()).toEqual(ThemeEnum.LIGHT);
  });

  it('Check DARK Theme', () => {
    local.set(THEME_KEY, ThemeEnum.DARK.toString());
    expect(getTheme()).toEqual(ThemeEnum.DARK);
  });
});
