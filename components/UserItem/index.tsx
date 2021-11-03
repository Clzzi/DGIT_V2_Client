import { IUserItem } from 'types/user.type';
import * as S from './styles';

const UserItem = ({
  image,
  name,
  id,
  commit,
  intro,
  rank,
}: IUserItem): JSX.Element => {
  return (
    <S.UserItem>
      <S.UserRank>{rank}</S.UserRank>
      <S.UserProfile src={image} alt="profile" />
      <S.UserName>{name}</S.UserName>
      <S.UserId>{id}</S.UserId>
      <S.UserCommit>{commit}</S.UserCommit>
      <S.UserIntro>{intro}</S.UserIntro>
    </S.UserItem>
  );
};

export default UserItem;
