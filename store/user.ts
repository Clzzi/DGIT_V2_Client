import { ITotalUserRank, IUser, IWeekUserRank } from 'types/user.type';
import { atom } from 'recoil';

export const userState = atom<IUser>({
  key: 'userState',
  default: {} as IUser,
});

export const totalUserState = atom<ITotalUserRank>({
  key: 'totalUserState',
  default: {} as ITotalUserRank,
});

export const weekUserState = atom<IWeekUserRank[]>({
  key: 'weekUserState',
  default: [] as IWeekUserRank[],
});

export const isMyAccountState = atom<boolean>({
  key: 'isMyAccountState',
  default: false as boolean,
});
