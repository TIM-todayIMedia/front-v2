export const isPathnameDetail = (pathname: string) =>
  !decodeURI(pathname).includes("filter") &&
  !decodeURI(pathname).includes("search") &&
  pathname !== "/";
