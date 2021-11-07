import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Common <Button />', () => {
  const message = '버튼';
  const fontColor = '#FFFFFF';
  const backgroundColor = '#000000';

  const props = {
    message,
    fontColor,
    backgroundColor,
  };

  it('Rendering Correctly', () => {
    render(<Button {...props} />);

    const ButtonEl = screen.getByText('버튼');

    expect(ButtonEl.tagName).toMatch(/^div$/i);
    expect(ButtonEl).toHaveStyleRule('color', '#FFFFFF');
    expect(ButtonEl).toHaveStyleRule('background-color', '#000000');
  });
});
