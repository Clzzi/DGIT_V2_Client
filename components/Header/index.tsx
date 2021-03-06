import * as S from './styles';
import { useEffect, useState } from 'react';
import Modal from 'components/common/Modal';
import Help from 'components/Help';
import { useRouter } from 'next/router';
import Token from 'lib/token';
import useLogin from 'hooks/login/useLogin';
import { ACCESS_TOKEN_KEY } from 'constants/auth.constants';
import useTheme from 'hooks/util/useTheme';
import LightLOGO from 'assets/LightLogo.svg';
import DarkLOGO from 'assets/DarkLogo.svg';
import Button from 'components/common/Button';

const Header = (): JSX.Element => {
  const router = useRouter();
  const { login } = useLogin();
  const { currentTheme, theme } = useTheme();
  const [isHelpModal, setIsHelpModal] = useState<boolean>(false);

  useEffect(() => {
    const { code } = router.query;
    if (code !== (null || undefined)) {
      login(code as string);
    }
  }, [login, router]);

  const SignButton = () =>
    Token.getToken(ACCESS_TOKEN_KEY) ? (
      <Button
        message="로그아웃"
        fontColor={theme.background}
        backgroundColor={theme.mainContent}
        click={() => {
          Token.removeToken();
          router.push('/');
        }}
      />
    ) : (
      <Button
        message="로그인"
        fontColor={theme.background}
        backgroundColor={theme.mainContent}
        click={() => {
          router.push(process.env.NEXT_PUBLIC_DAUTH_URL as string);
        }}
      />
    );

  return (
    <>
      <S.Header>
        <S.HeaderContent>
          {currentTheme ? <DarkLOGO /> : <LightLOGO />}
          <S.HeaderButton>
            {SignButton()}
            <Button
              message="도움말"
              fontColor={theme.mainContent}
              backgroundColor={theme.background}
              click={() => {
                setIsHelpModal(true);
              }}
            />
          </S.HeaderButton>
        </S.HeaderContent>
      </S.Header>

      {isHelpModal && (
        <Modal set={setIsHelpModal} width="80%" height="50%">
          <Help />
        </Modal>
      )}
    </>
  );
};

export default Header;
