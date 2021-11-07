import UserItem from './index';
import { render, screen } from '@testing-library/react';

describe('<UserItem />', () => {
  const userProfile = 'testImage';
  const userName = '유저';
  const userId = 'user';
  const userCommit = 1234;
  const userIntro = '안녕하세요 저는 유저입니다.';
  const userRank = '1';
  const userKeep = 5;

  const props = {
    image: userProfile,
    name: userName,
    id: userId,
    commit: userCommit,
    intro: userIntro,
    rank: userRank,
    keep: userKeep,
  };

  it('Render Components', () => {
    render(<UserItem {...props} />);

    const keepEl = screen.getByText(`${userKeep}일 유지중 🔥`);
    const userNameEl = screen.getByText(userName);
    const userIdEl = screen.getByText(userId);
    const userCommitEl = screen.getByText(userCommit);
    const userIntroEl = screen.getByText(userIntro);
    const userProfileEl = screen.getByAltText('profile');

    expect(keepEl).toBeEnabled();
    expect(keepEl.tagName).toMatch(/^span$/i);
    expect(userNameEl.tagName).toMatch(/^div$/i);
    expect(userIdEl.tagName).toMatch(/^div$/i);
    expect(userCommitEl.tagName).toMatch(/^div$/i);
    expect(userIntroEl.tagName).toMatch(/^div$/i);
    expect(userProfileEl.tagName).toMatch(/^IMG$/i);
  });
});
