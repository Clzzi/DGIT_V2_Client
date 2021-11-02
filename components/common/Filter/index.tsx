import { FilterEnum } from 'enum/FilterEnum';
import useFilter from 'hooks/filter/useFilter';
import React, { useEffect } from 'react';
import * as S from './styles';

const Filter = (): JSX.Element => {
  const [filter, onChangeFilter] = useFilter();

  return (
    <S.Filter
      defaultValue={FilterEnum[-1]}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        onChangeFilter(FilterEnum[e.target.value as keyof typeof FilterEnum]);
      }}
    >
      <option value={FilterEnum[-1]}>전체기수</option>
      <option value={FilterEnum[0]}>1</option>
      <option value={FilterEnum[1]}>2</option>
      <option value={FilterEnum[2]}>3</option>
      <option value={FilterEnum[3]}>4</option>
      <option value={FilterEnum[4]}>5</option>
      <option value={FilterEnum[5]}>6</option>
    </S.Filter>
  );
};

export default Filter;
