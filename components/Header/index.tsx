import * as S from './styles';
import { memo, useEffect, useState } from 'react';
import Modal from 'components/common/Modal';
import Help from 'components/Help';
import { useRouter } from 'next/router';
import Token from 'lib/token';
import useLogin from 'hooks/login/useLogin';
import { ACCESS_TOKEN_KEY } from 'constants/auth.constants';
import useTheme from 'hooks/util/useTheme';
import dynamic from 'next/dynamic';

const DarkLOGO = dynamic(() => import('assets/DarkLogo.svg'), { ssr: false });
const LightLOGO = dynamic(() => import('assets/LightLogo.svg'), { ssr: false });
const Button = dynamic(() => import('components/common/Button'), {
  ssr: false,
});

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
        <Modal set={setIsHelpModal} width="1060px" height="680px">
          <Help />
        </Modal>
      )}
    </>
  );
};

export default memo(Header);
