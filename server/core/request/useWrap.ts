export const useWrap = (promise: Promise<any>) => {
  return promise
    .then(response => [null, response])
    .catch((err) => {
      return [err, null]
    })
}
