export const encodeParams = (name: string) =>
  encodeURIComponent(decodeURI(name))
