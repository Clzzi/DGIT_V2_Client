import Help from '.';
import { render, screen } from '@testing-library/react';
import { ISSUE_URL, REPO_URL, WRITER_URL } from 'constants/help.constants';

describe('<Help />', () => {
  it('Render Correctly', () => {
    render(<Help />);

    const repoEl = screen.getByText('이곳');
    const writerEl = screen.getByText('제작자');
    const titleEl = screen.getByText('안내사항');
    const issueEl = screen.getByText('이슈');

    expect(titleEl.tagName).toMatch(/^div$/i);
    expect(repoEl.closest('a')).toHaveAttribute('href', REPO_URL);
    expect(issueEl.closest('a')).toHaveAttribute('href', ISSUE_URL);
    expect(writerEl.closest('a')).toHaveAttribute('href', WRITER_URL);
  });
});
