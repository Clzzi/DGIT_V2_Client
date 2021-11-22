import * as S from './styles';
import useProperty from 'hooks/property/useProperty';

const PropertyBar = (): JSX.Element => {
  const { propertyList } = useProperty();

  const Property: JSX.Element[] = propertyList.map(
    (property: string, index: number) => (
      <S.Property key={index} number={index}>
        {property}
      </S.Property>
    ),
  );

  return (
    <S.PropertyBar>
      <S.PropertyBarContent>{Property}</S.PropertyBarContent>
    </S.PropertyBar>
  );
};

export default PropertyBar
