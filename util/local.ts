export default class local {
  static get(key: string): string | null {
    let item = null;
    if (typeof window !== 'undefined') {
      item = localStorage.getItem(key);
    }
    return item;
  }
  static set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  static remove(key: string): void {
    localStorage.removeItem(key);
  }
}
