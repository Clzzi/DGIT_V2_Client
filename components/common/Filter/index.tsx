import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './styles';
import useFilter from 'hooks/filter/useFilter';
import { FilterEnum, FilterToTitle } from 'enum/FilterEnum';
import SelectArrow from 'assets/SelectArrow.png';

const Filter = (): JSX.Element => {
  const [filter, FilterList, onChangeFilter] = useFilter();
  const el: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const onClose = useCallback(
    (e: MouseEvent): void => {
      if (el.current && !el.current.contains(e.target as Node)) {
        setOpen(false);
      }
    },
    [el, setOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', onClose);
    return () => {
      document.removeEventListener('mousedown', onClose);
    };
  }, [onClose]);

  return (
    <S.FilterWrapper ref={el}>
      <S.Filter
        defaultValue={FilterEnum[-1]}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>
          {FilterToTitle[FilterEnum[filter] as keyof typeof FilterToTitle]}
        </span>
        <span>
          <img
            src={SelectArrow.src}
            alt={SelectArrow.src}
            width={8}
            height={6}
          />
        </span>
      </S.Filter>
      <S.OptionWrap open={open}>
        {FilterList.map((value: FilterToTitle, index: number) => {
          const key = index === 0 ? -1 : index - 1;
          return (
            <S.Option
              onClick={() => {
                setOpen(false);
                onChangeFilter(
                  FilterEnum[FilterEnum[key] as keyof typeof FilterEnum],
                );
              }}
              key={value}
              showing={filter === key}
            >
              {value}
            </S.Option>
          );
        })}
      </S.OptionWrap>
    </S.FilterWrapper>
  );
};

export default Filter;
