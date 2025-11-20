export const isObject = (value: unknown): value is object =>
  typeof value === "object" && value !== null;
export const isRecord = <T = Record<string, unknown>>(
  value: unknown,
): value is T =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const arrayInstanceOf = <T>(
  value: unknown,
  property: string,
): value is T[] =>
  Array.isArray(value) && (value.length === 0 || property in value[0]);

export const arrayIsEmpty = (value: unknown): value is undefined | [] =>
  isUndefined(value) || (Array.isArray(value) && value.length === 0);

export const objectIsEmpty = (value: unknown): value is undefined =>
  isUndefined(value) || (isObject(value) && Object.keys(value).length === 0);

export const isNotUndefined = <T>(value: T | undefined): value is T =>
  value !== undefined;
export const isUndefined = (value: unknown): value is undefined =>
  value === undefined;

export const isNotNull = <T>(value: T | null): value is T => value !== null;
export const isNull = (value: unknown): value is null => value === null;

export const isEmptyString = (value: unknown): value is "" =>
  isString(value) && value.trim().length === 0;
export const isNotEmptyString = (value: unknown): value is string =>
  isString(value) && value.trim().length > 0;
export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number";

export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";

export const isStringOrNumber = (value: unknown): value is string | number =>
  isString(value) || isNumber(value);
export const parseObjectString = (
  value: unknown,
): Record<string, string> | undefined => {
  if (!isObject(value)) return;

  return Object.fromEntries(
    Object.entries(value).filter(
      ([key, value]) => isString(key) && isString(value),
    ),
  );
};
export const parseString = (value: unknown): string | undefined =>
  isString(value) ? value : undefined;
export const isHTMLElement = (element: unknown): element is HTMLElement =>
  element instanceof HTMLElement;
