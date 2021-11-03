import * as S from './styles';

const Account = ({ isEdit }: { isEdit: boolean }): JSX.Element => {
  return (
    <S.Account>
      <S.Title>본인의 Github 아이디를 입력해주세요.</S.Title>
      <S.Content>
        <S.SubTitle showing={true}>Github 아이디 (example-user)</S.SubTitle>
        <S.Input placeholder="Github 아이디 (example-user)" />
      </S.Content>
      <S.Button>{isEdit ? '수정 ' : '신청'}</S.Button>
    </S.Account>
  );
};

export default Account;
