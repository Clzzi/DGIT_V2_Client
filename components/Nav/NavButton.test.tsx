import { render, screen } from '@testing-library/react';
import NavButton from '../Nav/NavButton';
import 'jest-styled-components';

describe('<NavButton />', () => {
  const title = '종합';
  const showing = true;
  const click = () => {};

  const props = {
    title,
    showing,
    click,
  };

  it('Rendering Correctly', () => {
    render(<NavButton {...props} />);

    const NavButtonEl = screen.getByText('종합');

    expect(NavButtonEl.tagName).toMatch(/^div$/i);
    expect(NavButtonEl.parentElement?.tagName).toMatch(/^div$/i);
  });
});
