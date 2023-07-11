export const numberWithSpaces = (x: number) => {
  return new Intl.NumberFormat('en-US').format(x)
}