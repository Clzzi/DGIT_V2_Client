import * as S from './styles';
import LOGO from 'assets/Logo.svg';
import { useTheme } from 'styled-components';
import Button from 'components/common/Button';
import { useEffect, useState } from 'react';
import Modal from 'components/common/Modal';
import Help from 'components/Help';
import { DAUTH_URL } from 'config/config.json';
import { useRouter } from 'next/router';
import Token from 'lib/token';
import useLogin from 'hooks/login/useLogin';

const Header = (): JSX.Element => {
  const router = useRouter();
  const theme = useTheme();
  const [isHelpModal, setIsHelpModal] = useState<boolean>(false);
  const { login } = useLogin();

  useEffect(() => {
    const { code } = router.query;
    if (code !== (null || undefined)) {
      login(code as string);
    }
  }, [login, router]);

  const SignButton = () =>
    Token.getToken('access_token') ? (
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
          router.push(DAUTH_URL);
        }}
      />
    );

  return (
    <>
      <S.Header>
        <S.HeaderContent>
          <LOGO />
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
        <Modal set={setIsHelpModal} width="1060px" height="680px">
          <Help />
        </Modal>
      )}
    </>
  );
};

export default Header;
