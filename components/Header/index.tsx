import * as S from './styles';
import LOGO from 'assets/Logo.svg';
import { useTheme } from 'styled-components';
import Button from 'components/common/Button';
import { useState } from 'react';
import Modal from 'components/common/Modal';
import Help from 'components/Help';

const Header = (): JSX.Element => {
  const theme = useTheme();
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);
  const [isHelpModal, setIsHelpModal] = useState<boolean>(false);

  return (
    <>
      <S.Header>
        <S.HeaderContent>
          <LOGO />
          <S.HeaderButton>
            <Button
              message="로그인"
              fontColor={theme.background}
              backgroundColor={theme.mainContent}
              click={() => {
                setIsLoginModal(true);
              }}
            />
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

      {isLoginModal && (
        <Modal set={setIsLoginModal}>
          <div>test</div>
        </Modal>
      )}

      {isHelpModal && (
        <Modal set={setIsHelpModal} width="1060px" height="680px">
          <Help />
        </Modal>
      )}
    </>
  );
};

export default Header;
