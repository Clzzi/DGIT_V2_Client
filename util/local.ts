export default class local {
  static get(key: string): string | null {
    return localStorage.getItem(key);
  }
  static set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  static remove(key: string): void {
    localStorage.removeItem(key);
  }
}
