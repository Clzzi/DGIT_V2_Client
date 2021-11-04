import * as S from './styles';
import { IUserItem } from 'types/user.type';
import Image from 'next/image';
import { getMedal } from 'util/getMedal';

const UserItem = ({
  image,
  name,
  id,
  commit,
  intro,
  rank,
  keep,
}: IUserItem): JSX.Element => {
  return (
    <a href={`https://github.com/${id}`} target="_blank" rel="noreferrer">
      <S.UserItem>
        <S.UserRank rank={Number(rank)}>{rank}</S.UserRank>
        <S.UserProfile>
          <Image
            unoptimized
            loader={() => image}
            src={image}
            alt="profile"
            width={70}
            height={70}
          />
        </S.UserProfile>
        <S.UserName medal={getMedal(Number(rank))}>{name}</S.UserName>
        {keep! >= 0 && <S.UserKeep>{keep}일 유지중 🔥</S.UserKeep>}
        <S.UserId>{id}</S.UserId>
        <S.UserCommit>{commit}</S.UserCommit>
        <S.UserIntro>{intro}</S.UserIntro>
      </S.UserItem>
    </a>
  );
};

export default UserItem;
