import {
  MOCK_TOTALUSERS,
  MOCK_WEEKTOPUSERS,
  MOCK_WEEKUSERS,
} from './data/users';
import { rest } from 'msw';
import { MOCK_INFO, MOCK_REFRESHTOKEN, MOCK_TOKEN } from './data/auth';

const handlers = [
  // auth
  rest.post('/auth/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_TOKEN));
  }),

  rest.post('/token/refresh', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_REFRESHTOKEN));
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

  rest.get('/weekly/top', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_WEEKTOPUSERS));
  }),
];

export default handlers;
