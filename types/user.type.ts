export interface ITotalUserRank {
  totalTop: number;
  users: ITotalUser[];
}

export interface ITotalUser {
  bio: string;
  createdAt: string;
  githubId: string;
  totalContributions: number;
  user: IUser;
  userImage: string;
}

export interface IWeekUserRank {
  weeklyCommit: number;
  githubUser: ITotalUser;
}

export interface IUser {
  id: string;
  name: string;
}

export interface IWeekTopList {
  idx: number;
  date: string;
  contribute: number;
  weeklyTopGithubUser: {
    githubId: string;
    totalContributions: number;
    userImage: string;
    bio: string;
    weeklyTopUser: IUser;
  };
}
