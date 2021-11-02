export default class local {
  static get(key: string): string | null {
    let test = null;
    if (typeof window !== 'undefined') {
      test = localStorage.getItem(key);
    }
    return test;
  }
  static set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  static remove(key: string): void {
    localStorage.removeItem(key);
  }
}
