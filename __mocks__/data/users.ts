import {
  ITotalUserRankResponse,
  IWeekTopUserListResponse,
  IWeekUserRankResponse,
} from 'lib/api/user/user.dto';

export const MOCK_TOTALUSERS: ITotalUserRankResponse = {
  status: 200,
  message: '모든 유저 랭킹 조회 성공',
  data: {
    totalTop: 1,
    users: [
      {
        bio: '안녕하세요',
        githubId: 'Clzzi',
        totalContributions: 2100,
        user: {
          id: 'user_id_value',
          name: '손민재',
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
        userImage: 'https://test.jpg',
      },
    ],
  },
};

export const MOCK_WEEKUSERS: IWeekUserRankResponse = {
  status: 200,
  message: '주간 유저 랭킹 조회 성공',
  data: [
    {
      weeklyCommit: 57,
      githubUser: {
        bio: '안녕하세요',
        githubId: 'Clzzi',
        totalContributions: 2100,
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
        bio: 'hello',
        githubId: 'TEST',
        totalContributions: 1000,
        user: {
          id: 'user_id_value',
          name: 'USER',
        },
        userImage: 'http://test.jpg',
      },
    },
  ],
};

export const MOCK_WEEKTOPUSERS: IWeekTopUserListResponse = {
  status: 200,
  message: '주별 기록 조회 성공',
  data: [
    {
      contribute: 57,
      date: '2021-11-14',
      idx: 1,
      weeklyTopGithubUser: {
        bio: '안녕하세요',
        githubId: 'Clzzi',
        totalContributions: 2100,
        userImage: 'https://test.jpg',
        weeklyTopUser: {
          id: 'user_id_value',
          name: '손민재',
        },
      },
    },
    {
      contribute: 200,
      date: '2021-11-07',
      idx: 2,
      weeklyTopGithubUser: {
        bio: '안녕하세요',
        githubId: 'Clzzi',
        totalContributions: 1900,
        userImage: 'https://test.jpg',
        weeklyTopUser: {
          id: 'user_id_value',
          name: '손민재',
        },
      },
    },
  ],
};
