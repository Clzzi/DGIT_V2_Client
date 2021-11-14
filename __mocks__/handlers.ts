import { rest } from 'msw';
import { MOCK_INFO, MOCK_TOKEN } from './data/auth';
import {
  MOCK_TOTALUSERS,
  MOCK_WEEKTOPUSERS,
  MOCK_WEEKUSERS,
} from './data/users';

const handlers = [
  // auth
  rest.post('http://localhost/undefined/auth/login', (req, res, ctx) => {
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

  rest.get('/weekly/top', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCK_WEEKTOPUSERS));
  }),
];

export default handlers;
