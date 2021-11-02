import { FilterEnum } from 'enum/FilterEnum';
import { useCallback, useState } from 'react';

const useFilter = (): [FilterEnum, (value: FilterEnum) => void] => {
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.ALL);

  const onChangeFilter = useCallback((value: FilterEnum) => {
    setFilter(value);
  }, []);

  return [filter, onChangeFilter];
};

export default useFilter;
