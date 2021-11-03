import { FilterEnum, FilterToTitle } from 'enum/FilterEnum';
import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from 'store/filter';

const useFilter = (): [
  FilterEnum,
  FilterToTitle[],
  (value: FilterEnum) => void,
] => {
  const [filter, setFilter] = useRecoilState<FilterEnum>(filterState);

  const onChangeFilter = useCallback(
    (value: FilterEnum) => {
      setFilter(value);
    },
    [setFilter],
  );

  const FilterList = useMemo(() => {
    return [
      FilterToTitle.ALL,
      FilterToTitle.GEN1,
      FilterToTitle.GEN2,
      FilterToTitle.GEN3,
      FilterToTitle.GEN4,
      FilterToTitle.GEN5,
      FilterToTitle.GEN6,
    ];
  }, []);

  return [filter, FilterList, onChangeFilter];
};

export default useFilter;
