import { atom } from 'recoil';
import { FilterEnum } from 'enum/FilterEnum';

export const filterState = atom<FilterEnum>({
  key: 'filterState',
  default: FilterEnum.ALL,
});
