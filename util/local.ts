export default class local {
  public static get(key: string): string | null {
    let item = null;
    if (typeof window !== 'undefined') {
      item = localStorage.getItem(key);
    }
    return item;
  }
  public static set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  public static remove(key: string): void {
    localStorage.removeItem(key);
  }
}
