import { getRem } from 'util/getRem';

it('getRem Correctly', () => {
  const px = 32;
  expect(getRem(px)).toBe('2rem');
});
