import '@testing-library/jest-dom';
import 'jest-styled-components';

import server from '__mocks__/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
