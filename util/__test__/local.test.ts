import local from 'util/local';

describe('TEST local', () => {
  const TEST_KEY = 'TEST';
  const TEST_KEY_VALUE = 'ABCD1234';

  it('SET & GET & REMOVE Local', () => {
    local.set(TEST_KEY, TEST_KEY_VALUE);
    expect(local.get(TEST_KEY)).toEqual(TEST_KEY_VALUE);
    local.remove(TEST_KEY);
    expect(local.get(TEST_KEY)).toBeNull();
  });
});
