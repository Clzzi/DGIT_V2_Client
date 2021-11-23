import * as S from './styles';
import dynamic from 'next/dynamic';
import useNav from 'hooks/nav/useNav';
import useTotalUser from 'hooks/totalUser/useTotalUser';
import useWeekTop from 'hooks/weekTop/useWeekTop';
import useWeekUser from 'hooks/weekUser/useWeekUser';

const UserItem = dynamic(() => import('components/UserItem'));
const SkeletonUserItem = dynamic(() => import('components/SkeletonUserItem'), {
  ssr: false,
});

const UserList = (): JSX.Element => {
  const [nav] = useNav();
  const { totalUser } = useTotalUser();
  const { weekUser } = useWeekUser();
  const { weekTopUser } = useWeekTop();

  const getUserList = () => {
    if (totalUser.users && weekUser.length) {
      switch (nav) {
        case '주간':
          return weekUser.map((user, index) => {
            return (
              <UserItem
                key={user.githubUser.user.id}
                image={user.githubUser.userImage}
                name={user.githubUser.user.name}
                id={user.githubUser.githubId}
                commit={user.weeklyCommit}
                intro={user.githubUser.bio}
                rank={(index + 1).toString()}
              />
            );
          });
        case '종합':
          return totalUser.users.map((user, index) => {
            return (
              <UserItem
                key={user.user.id}
                image={user.userImage}
                name={user.user.name}
                id={user.githubId}
                commit={user.totalContributions}
                intro={user.bio}
                rank={(index + 1).toString()}
                keep={index === 0 ? totalUser.totalTop : undefined}
              />
            );
          });
        case '주간기록':
          return weekTopUser.map((user) => {
            return (
              <UserItem
                key={user.idx}
                image={user.weeklyTopGithubUser.userImage}
                name={user.weeklyTopGithubUser.weeklyTopUser.name}
                commit={user.contribute}
                rank={user.date}
                intro={user.weeklyTopGithubUser.bio}
                id={user.weeklyTopGithubUser.githubId}
              />
            );
          });
      }
    }
  };

  return (
    <S.UserList>
      {weekTopUser.length ? (
        <S.UserListContent>{getUserList()}</S.UserListContent>
      ) : (
        <S.UserItemWrapper>
          <SkeletonUserItem />
          <SkeletonUserItem />
          <SkeletonUserItem />
          <SkeletonUserItem />
          <SkeletonUserItem />
        </S.UserItemWrapper>
      )}
    </S.UserList>
  );
};

export default UserList;
