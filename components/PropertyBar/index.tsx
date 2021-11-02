import * as S from './styles';
import useProperty from 'hooks/property/useProperty';

const PropertyBar = (): JSX.Element => {
  const { propertyList } = useProperty();
  return (
    <S.PropertyBar>
      <S.PropertyBarContent>
        {propertyList.map((property: string, index: number) => {
          return (
            <S.Property key={index} number={index}>
              {property}
            </S.Property>
          );
        })}
      </S.PropertyBarContent>
    </S.PropertyBar>
  );
};

export default PropertyBar;
