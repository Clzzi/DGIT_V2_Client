import { ITotalUserRank, IWeekUserRank } from 'types/user.type';
import { atom } from 'recoil';
import { ILogin } from 'types/auth.type';

export const userState = atom<ILogin>({
  key: 'userState',
  default: {} as ILogin,
});

export const totalUserState = atom<ITotalUserRank>({
  key: 'totalUserState',
  default: {} as ITotalUserRank,
});

export const weekUserState = atom<IWeekUserRank[]>({
  key: 'weekUserState',
  default: [] as IWeekUserRank[],
});

