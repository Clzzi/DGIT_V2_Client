import * as S from './styles';
import LOGO from 'assets/Logo.svg';
import { useTheme } from 'styled-components';
import Button from 'components/common/Button';

const Header = (): JSX.Element => {
  const theme = useTheme();
  return (
    <S.Header>
      <S.HeaderContent>
        <LOGO />
        <S.HeaderButton>
          <Button
            message="로그인"
            fontColor={theme.background}
            backgroundColor={theme.mainContent}
            click={() => {
              console.log('login');
            }}
          />
          <Button
            message="도움말"
            fontColor={theme.mainContent}
            backgroundColor={theme.background}
            click={() => {
              console.log('help');
            }}
          />
        </S.HeaderButton>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
