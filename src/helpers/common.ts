export const isObjectEmpty = (objectAny: any) => {
  return Object.keys(objectAny).length === 0 && objectAny.constructor === Object;
};

export const isIp = (ip: string) => {
  const pattern = new RegExp('^(?:[0-9]{1,3}.){3}[0-9]{1,3}$');
  return pattern.test(ip);
};
export const isString = (input: any) => {
  const pattern = new RegExp('^[a-zA-Z ]+$');
  return pattern.test(input);
};
