import { ThemeEnum } from 'enum/ThemeEnum';
import useTheme from 'hooks/util/useTheme';
import { memo } from 'react';
import * as S from './styles';

const Theme = (): JSX.Element => {
  const { currentTheme, handleChangeTheme } = useTheme();

  return (
    <S.ThemeWrapper>
      <S.Theme
        defaultChecked={currentTheme === ThemeEnum.DARK ? true : false}
        onClick={handleChangeTheme}
        id="Theme"
        type="checkbox"
      />
      <S.ThemeLabel htmlFor="Theme" />
    </S.ThemeWrapper>
  );
};

export default memo(Theme);
