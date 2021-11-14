import { IResponse } from 'types/response.type';
import {
  ITotalUserRank,
  IUser,
  IWeekTopList,
  IWeekUserRank,
} from 'types/user.type';

export interface ITotalUserRankResponse extends IResponse {
  data: ITotalUserRank;
}

export interface IWeekUserRankResponse extends IResponse {
  data: IWeekUserRank[];
}

export interface IGetUserInfoResponse extends IResponse {
  data: IUser;
}

export interface IWeekTopUserListResponse extends IResponse {
  data: IWeekTopList[];
}

export interface setGithubIdDto {
  githubId: string;
}
