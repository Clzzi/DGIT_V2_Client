import { getBearer } from '../getBearer';

it('getBearer Correctly', () => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBQ0NFU1MiLCJleHAiOjE2MzYyNzM3MjEsInVzZXJJZCI6IjBiNWFiZGY5LWYyZTQtNDI5OC1iZWE0LWVjMGJkNmEzYjNiOSIsImlhdCI6MTYzNjI3MDEyMX0.ehdV2rkBkmcvXme7Qv6p06fxTyisJgwpO2NAABvKzjY';
  const tokenHeader = 'Bearer';
  expect(getBearer(token)).toBe(`${tokenHeader} ${token}`);
});
