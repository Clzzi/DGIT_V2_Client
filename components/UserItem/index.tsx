import * as S from './styles';
import Image from 'next/image';
import { getMedal } from 'util/getMedal';
import { IUserItem } from 'types/common.type';
import { getGithubURL } from 'util/getGithubURL';

const UserItem = ({
  image,
  name,
  id,
  commit,
  intro,
  rank,
  keep,
}: IUserItem): JSX.Element => {
  const UserKeepComment: JSX.Element = (
    <S.UserKeep>{keep}일 유지중 🔥</S.UserKeep>
  );

  return (
    <a href={getGithubURL(id)} target="_blank" rel="noreferrer">
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
            layout="intrinsic"
          />
        </S.UserProfile>
        <S.UserName medal={getMedal(Number(rank))}>{name}</S.UserName>
        {keep! >= 0 && UserKeepComment}
        <S.UserId>{id}</S.UserId>
        <S.UserCommit>{commit}</S.UserCommit>
        <S.UserIntro>{intro}</S.UserIntro>
      </S.UserItem>
    </a>
  );
};

export default UserItem;
