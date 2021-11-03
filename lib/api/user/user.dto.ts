import { IResponse } from 'types/response.type';
import { ITotalUserRank, IWeekUserRank } from 'types/user.type';

export interface ITotalUserRankResponse extends IResponse {
  data: ITotalUserRank;
}

export interface IWeekUserRankResponse extends IResponse {
  data: IWeekUserRank[];
}

// export interface IWeekTopUserListResponse extends IResponse {
//   data:
// }
