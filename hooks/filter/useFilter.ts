import { FilterEnum } from 'enum/FilterEnum';
import { useCallback, useMemo, useState } from 'react';

const useFilter = (): [FilterEnum, string[], (value: FilterEnum) => void] => {
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.ALL);

  const onChangeFilter = useCallback((value: FilterEnum) => {
    setFilter(value);
  }, []);

  const FilterList = useMemo(() => {
    return ['전체기수', '1기', '2기', '3기', '4기', '5기', '6기'];
  }, []);

  return [filter, FilterList, onChangeFilter];
};

export default useFilter;
