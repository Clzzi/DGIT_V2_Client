import { atom } from 'recoil';
import { TNav } from 'types/common.type';

export const navState = atom<TNav>({
  key: 'navState',
  default: '종합',
});
