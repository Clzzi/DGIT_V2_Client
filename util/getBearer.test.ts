import { getBearer } from './getBearer';

it('getBearer correctly', () => {
  expect(getBearer('Testing')).toBe('Bearer Testing');
});
