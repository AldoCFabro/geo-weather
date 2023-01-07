export const isObjectEmpty = (objectAny: any) => {
  return Object.keys(objectAny).length === 0 && objectAny.constructor === Object;
};
