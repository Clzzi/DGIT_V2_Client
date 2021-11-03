import UserItem from 'components/UserItem';
import useTotalUser from 'hooks/totalUser/useTotalUser';
import * as S from './styles';

const UserList = (): JSX.Element => {
  const { totalUser } = useTotalUser();
  return (
    <S.UserList>
      <S.UserListContent>
        {totalUser.users &&
          totalUser.users.map((user, index) => {
            return (
              <UserItem
                key={user.user.id}
                image={user.userImage}
                name={user.user.name}
                id={user.githubId}
                commit={user.totalContributions}
                intro={user.bio}
                rank={index + 1}
                keep={index === 0 ? totalUser.totalTop : undefined}
              />
            );
          })}
      </S.UserListContent>
    </S.UserList>
  );
};

export default UserList;
