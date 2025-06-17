export function setlocalStorage(key: string, value: unknown) {
  try {
    window.localStorage.set(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export function getlocalStorage(key: string) {
  try {
    const localStorage = window.localStorage.get(key);
    return localStorage ? JSON.parse(localStorage) : undefined;
  } catch (error) {
    console.log(error);
  }
}
