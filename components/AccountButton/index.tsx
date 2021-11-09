import * as S from './styles';
import Token from 'lib/token';
import { useState } from 'react';
import UserAdd from 'assets/UserAdd.svg';
import UserEdit from 'assets/UserEdit.svg';
import Account from 'components/Account';
import Modal from 'components/common/Modal';
import useHeader from 'hooks/header/useHeader';
import { ACCESS_TOKEN_KEY } from 'constants/auth.constants';

const AccountButton = (): JSX.Element => {
  const { isMyAccount } = useHeader();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {Token.getToken(ACCESS_TOKEN_KEY) && (
        <S.AccountButton onClick={() => setIsOpen(true)}>
          {isMyAccount ? <UserEdit /> : <UserAdd />}
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

export default AccountButton;
