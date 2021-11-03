import { atom } from 'recoil';
import { ILogin } from 'types/auth.type';

export const userState = atom<ILogin>({
  key: 'userState',
  default: {} as ILogin,
});
