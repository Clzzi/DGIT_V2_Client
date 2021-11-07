import { getPropertyWidth } from 'util/getPropertyWidth';

describe('Test getPropertyWidth', () => {
  const PropertyId = [0, 1, 2, 3, 4, 5];
  const PeopertyWidth = ['136px', '91px', '136px', '159px', '151px', 'auto'];

  it('getPropertyWidth Correctly', () => {
    PropertyId.forEach((id) => {
      expect(getPropertyWidth(id)).toBe(PeopertyWidth[id]);
    });
  });
});
