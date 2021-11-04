import axiosClient from 'lib/axios/axiosClient';
import { IResponse } from 'types/response.type';
import {
  IGetUserInfoResponse,
  ITotalUserRankResponse,
  IWeekTopUserListResponse,
  IWeekUserRankResponse,
  setGithubIdDto,
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

export const getWeekTopUserList =
  async (): Promise<IWeekTopUserListResponse> => {
    const url: string = '/weekly/top';
    const { data } = await axiosClient.get<IWeekTopUserListResponse>(url);
    return data;
  };

export const getUserInfo = async (): Promise<IGetUserInfoResponse> => {
  const url: string = '/user/my';
  const { data } = await axiosClient.get<IGetUserInfoResponse>(url);
  return data;
};

export const setGithubId = async (dto: setGithubIdDto): Promise<IResponse> => {
  const url: string = '/user/github';
  const { data } = await axiosClient.put<IResponse>(url, dto);
  return data;
};
