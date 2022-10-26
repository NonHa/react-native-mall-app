const toString = Object.prototype.toString;

export const isArray = (val: any): boolean => {
  if (typeof Array.isArray === 'undefined') {
    return toString.call(val) === '[object Array]';
  }
  return Array.isArray(val);
};

export function isFunction(val: unknown) {
  return typeof val === 'function';
}
