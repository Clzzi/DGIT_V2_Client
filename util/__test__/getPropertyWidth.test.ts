import { getPropertyWidth } from 'util/getPropertyWidth';

describe('Test getPropertyWidth', () => {
  const PropertyId = [0, 1, 2, 3, 4, 5];
  const PeopertyWidth = ['9.7%', '5.8%', '9.8%', '11.8%', '10.5%', 'auto'];

  it('getPropertyWidth Correctly', () => {
    PropertyId.forEach((id) => {
      expect(getPropertyWidth(id)).toBe(PeopertyWidth[id]);
    });
  });
});
