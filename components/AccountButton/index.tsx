import * as S from './styles';
import UserAdd from 'assets/UserAdd.svg';
import UserEdit from 'assets/UserEdit.svg';
import { useState } from 'react';
import Modal from 'components/common/Modal';
import Account from 'components/Account';
import useHeader from 'hooks/header/useHeader';

const AccountButton = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isMyAccount } = useHeader();

  return (
    <>
      <S.AccountButton onClick={() => setIsOpen(true)}>
        {isMyAccount ? <UserEdit /> : <UserAdd />}
      </S.AccountButton>
      {isOpen && (
        <Modal set={setIsOpen}>
          <Account isEdit={isMyAccount} set={setIsOpen} />
        </Modal>
      )}
    </>
  );
};

export default AccountButton;
