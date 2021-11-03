import axiosClient from 'lib/axios/axiosClient';
import {
  IGetUserInfoResponse,
  ITotalUserRankResponse,
  IWeekUserRankResponse,
} from './user.dto';

export const getTotalUserRank = async (): Promise<ITotalUserRankResponse> => {
  const url: string = '/total';
  const { data } = await axiosClient.get<ITotalUserRankResponse>(url);
  return data;
};

export const getWeekUserRank = async (): Promise<IWeekUserRankResponse> => {
  const url: string = '/week';
  const { data } = await axiosClient.get<IWeekUserRankResponse>(url);
  return data;
};

// export const getWeekTopUserList = async (): Promise<> => {
//   const url: string = '/weekly/top';
//   const { data } = await axiosClient.get<>(url);
//   return data;
// };

export const getUserInfo = async (): Promise<IGetUserInfoResponse> => {
  const url: string = '/user/my';
  const { data } = await axiosClient.get<IGetUserInfoResponse>(url);
  return data;
};
