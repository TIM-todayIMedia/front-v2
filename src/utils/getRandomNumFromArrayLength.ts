export const getRandomNumFromArrayLength = (list: object[]) =>
  Math.floor(Math.random() * (list?.length ?? 1 - 1));
