import jwt, { JwtPayload } from 'jsonwebtoken';
import local from 'util/local';

class Token {
  public static getToken(key: string): string | null {
    return local.get(key);
  }

  public static decodeToken(key: string) {
    return jwt.decode(this.getToken(key)!) as JwtPayload;
  }

  public static setToken(key: string, token: string): void {
    local.set(key, token);
  }

  public static removeToken(): void {
    local.remove('access_token');
    local.remove('refresh_token');
  }
}

export default Token;
