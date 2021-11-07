import UserItem from './index';
import { render } from '@testing-library/react';
import React from 'react';

it('matches snapshot', () => {
  const utils = render(
    <UserItem
      image="qweqwe"
      name="유저"
      id="user"
      commit={1234}
      intro="안녕하세요 저는 유저 입니다."
      rank="1"
      keep={5}
    />,
  );
  expect(utils.container).toMatchSnapshot();
});
