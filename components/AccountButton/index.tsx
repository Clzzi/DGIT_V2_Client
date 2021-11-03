import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { isMyAccountState } from 'store/user';
import UserAdd from 'assets/UserAdd.svg';
import UserEdit from 'assets/UserEdit.svg';
import { useEffect, useState } from 'react';
import Modal from 'components/common/Modal';
import Account from 'components/Account';

const AccountButton = (): JSX.Element => {
  const isMyAccount = useRecoilValue<boolean>(isMyAccountState);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isMyAccount);
  }, [isMyAccount]);

  return (
    <>
      <S.AccountButton onClick={() => setIsOpen(true)}>
        {isMyAccount ? <UserEdit /> : <UserAdd />}
      </S.AccountButton>
      {isOpen && (
        <Modal set={setIsOpen}>
          <Account isEdit={isMyAccount} />
        </Modal>
      )}
    </>
  );
};

export default AccountButton;
