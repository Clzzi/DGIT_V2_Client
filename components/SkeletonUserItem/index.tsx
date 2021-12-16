import * as S from './styles';

const SkeletonUserItem = (): JSX.Element => {
  return (
    <S.UserItem>
      <S.UserItemContent
        width="2.85%"
        height="23%"
        margin="0px 36px 0px 45px"
      />
      <S.UserItemProfile />
      <S.UserItemContent width="7%" height="23%" margin="0px 25px 0px 25px" />
      <S.UserItemContent width="7%" height="23%" margin="0px 25px 0px 25px" />
      <S.UserItemContent width="60px" height="23%" margin="0px 25px 0px 25px" />
      <S.UserItemContent
        width="48.25%"
        height="23%"
        margin="0px 25px 0px 25px"
      />
    </S.UserItem>
  );
};

export default SkeletonUserItem;
