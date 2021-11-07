import { getGithubURL } from 'util/getGithubURL';

it('getGithubURL Correctly', () => {
  const defaultGithubURL = 'https://github.com/';
  const userId = 'USER';

  expect(getGithubURL(userId)).toBe(`${defaultGithubURL}${userId}`);
});
