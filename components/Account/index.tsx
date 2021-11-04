import React from 'react';
import * as S from './styles';
import useAccount from 'hooks/account/useAccount';
import { IAccount } from 'types/common.type';

const Account = ({ isEdit, set }: IAccount): JSX.Element => {
  const [input, setInput, handleGithubId] = useAccount();
  return (
    <S.Account>
      <S.Title>본인의 Github 아이디를 입력해주세요.</S.Title>
      <S.Content>
        <S.SubTitle showing={input ? true : false}>
          Github 아이디 (example-user)
        </S.SubTitle>
        <S.Input
          placeholder="Github 아이디 (example-user)"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </S.Content>
      <S.Button
        onClick={() => handleGithubId(set)}
        showing={input ? true : false}>
        {isEdit ? '수정 ' : '신청'}
      </S.Button>
    </S.Account>
  );
};

export default Account;
