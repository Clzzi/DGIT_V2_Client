import * as S from './styles';
import Token from 'lib/token';
import { memo, useState } from 'react';
import LightUserAdd from 'assets/LightUserAdd.svg';
import LightUserEdit from 'assets/LightUserEdit.svg';
import DarkUserAdd from 'assets/DarkUserAdd.svg';
import DarkUserEdit from 'assets/DarkUserEdit.svg';
import Account from 'components/Account';
import Modal from 'components/common/Modal';
import useHeader from 'hooks/header/useHeader';
import { ACCESS_TOKEN_KEY } from 'constants/auth.constants';
import useTheme from 'hooks/util/useTheme';

const AccountButton = (): JSX.Element => {
  const { isMyAccount } = useHeader();
  const { currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {Token.getToken(ACCESS_TOKEN_KEY) && (
        <S.AccountButton onClick={() => setIsOpen(true)}>
          {currentTheme ? (
            isMyAccount ? (
              <DarkUserEdit />
            ) : (
              <DarkUserAdd />
            )
          ) : isMyAccount ? (
            <LightUserEdit />
          ) : (
            <LightUserAdd />
          )}
        </S.AccountButton>
      )}
      {isOpen && (
        <Modal set={setIsOpen}>
          <Account isEdit={isMyAccount} set={setIsOpen} />
        </Modal>
      )}
    </>
  );
};

export default memo(AccountButton);
