import { ITotalUserRank, IWeekUserRank } from 'types/user.type';

export const MOCK_TOTALUSERS = {
  status: 200,
  message: 'test',
  data: {
    totalTop: 1,
    users: [
      {
        bio: '안녕하세요',
        githubId: 'Clzzi',
        totalContributions: 2100,
        user: {
          id: 'user_id_value',
          name: 'Clzzi',
        },
        userImage: 'http://test.jpg',
      },
      {
        bio: 'hello',
        githubId: 'TEST',
        totalContributions: 1000,
        user: {
          id: 'user_id_value',
          name: 'USER',
        },
        userImage: 'http:test.jpg',
      },
    ],
  },
};

export const MOCK_WEEKUSERS: IWeekUserRank[] = [
  {
    weeklyCommit: 10,
    githubUser: {
      bio: 'Hello',
      githubId: 'Clzzi',
      totalContributions: 2130,
      user: {
        id: 'user_id_value',
        name: '손민재',
      },
      userImage: 'http://test.jpg',
    },
  },
  {
    weeklyCommit: 1,
    githubUser: {
      bio: 'Hi',
      githubId: 'TEST',
      totalContributions: 2000,
      user: {
        id: 'user_id_value',
        name: 'USER',
      },
      userImage: 'http://test.jpg',
    },
  },
];
