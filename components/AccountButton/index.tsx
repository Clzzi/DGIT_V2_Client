import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { isMyAccountState } from 'store/user';
import UserAdd from 'assets/UserAdd.svg';
import UserEdit from 'assets/UserEdit.svg';

const AccountButton = (): JSX.Element => {
  const isMyAccount = useRecoilValue<boolean>(isMyAccountState);
  return (
    <S.AccountButton>
      {isMyAccount ? <UserEdit /> : <UserAdd />}
    </S.AccountButton>
  );
};

export default AccountButton;
