import local from 'util/local';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'constants/token.constants';

class Token {
  public static getToken(key: string): string | null {
    return local.get(key);
  }

  public static decodeToken(key: string): JwtPayload {
    return jwt.decode(this.getToken(key)!) as JwtPayload;
  }

  public static setToken(key: string, token: string): void {
    local.set(key, token);
  }

  public static removeToken(): void {
    local.remove(ACCESS_TOKEN_KEY);
    local.remove(REFRESH_TOKEN_KEY);
  }
}

export default Token;
