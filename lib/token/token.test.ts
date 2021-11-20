import Token from '.';
import { ACCESS_TOKEN_KEY } from 'constants/auth.constants';

describe('TEST Token', () => {
  const TOKEN_VALUE = 'ABCD1234!@#$';
  it('SET & GET & DECODE & REMOVE Token', () => {
    Token.setToken(ACCESS_TOKEN_KEY, TOKEN_VALUE);
    expect(Token.getToken(ACCESS_TOKEN_KEY)).toEqual(TOKEN_VALUE);
    Token.removeToken();
    expect(Token.getToken(ACCESS_TOKEN_KEY)).toBeNull();
  });
});
