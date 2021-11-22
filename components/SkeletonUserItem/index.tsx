import { memo } from 'react';
import * as S from './styles';

const SkeletonUserItem = (): JSX.Element => {
  return (
    <S.UserItem>
      <S.UserItemContent
        width="40px"
        height="30px"
        margin="0px 36px 0px 45px"
      />
      <S.UserItemProfile />
      <S.UserItemContent
        width="100px"
        height="30px"
        margin="0px 25px 0px 25px"
      />
      <S.UserItemContent
        width="100px"
        height="30px"
        margin="0px 25px 0px 25px"
      />
      <S.UserItemContent
        width="60px"
        height="30px"
        margin="0px 25px 0px 25px"
      />
      <S.UserItemContent
        width="680px"
        height="30px"
        margin="0px 25px 0px 25px"
      />
    </S.UserItem>
  );
};

export default memo(SkeletonUserItem);
