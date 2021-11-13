import { rest } from 'msw';
import { MOCK_INFO, MOCK_TOKEN } from './data/auth';
import { MOCK_TOTALUSERS, MOCK_WEEKUSERS } from './data/users';

const handlers = [
  // auth
  rest.get('/auth/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_TOKEN));
  }),

  rest.get('/user/my', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_INFO));
  }),

  // users
  rest.get('/total', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_TOTALUSERS));
  }),

  rest.get('/week', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_WEEKUSERS));
  }),
];

export default handlers;
