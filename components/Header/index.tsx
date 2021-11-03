import * as S from './styles';
import LOGO from 'assets/Logo.svg';
import { useTheme } from 'styled-components';
import Button from 'components/common/Button';
import { useState } from 'react';
import Modal from 'components/common/Modal';
import Help from 'components/Help';
import local from 'util/local';
import { DAUTH_URL } from 'config/config.json';
import { useRouter } from 'next/router';

const Header = (): JSX.Element => {
  const theme = useTheme();
  const router = useRouter();
  const [isHelpModal, setIsHelpModal] = useState<boolean>(false);

  const SignButton = () =>
    // 로그인관련 util만든 후 validation 필요
    local.get('access_token') ? (
      <Button
        message="로그인"
        fontColor={theme.background}
        backgroundColor={theme.mainContent}
        click={() => {
          router.push(DAUTH_URL);
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
