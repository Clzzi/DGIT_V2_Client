import '@testing-library/jest-dom';
import 'jest-styled-components';

import dotenv from 'dotenv';
import server from '__mocks__/server';

dotenv.config({ path: './test.env' });

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
