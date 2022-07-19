export const setStorage = <T>(key: string, value: T): void => {
  const json = JSON.stringify(value)
  localStorage.setItem(key, json)
}

export const getStorage = (key: string) => {
  const json = localStorage.getItem(key)
  return json ? JSON.parse(json) : null
}
