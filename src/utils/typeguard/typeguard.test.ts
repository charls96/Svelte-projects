import {
  arrayInstanceOf,
  arrayIsEmpty,
  isBoolean,
  isEmptyString,
  isNotEmptyString,
  isNotNull,
  isNotUndefined,
  isNull,
  isNumber,
  isObject,
  isRecord,
  isString,
  isStringOrNumber,
  isUndefined,
  objectIsEmpty,
  parseObjectString,
  parseString,
} from "./typeguard";
import { describe, expect, it } from "vitest";

describe("typeguard", () => {
  it("isObject should detect objects and exclude null", () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject(123)).toBe(false);
  });

  it("isRecord should be true for plain objects and false for arrays/null", () => {
    expect(isRecord({})).toBe(true);
    expect(isRecord({ a: 1 })).toBe(true);
    expect(isRecord([])).toBe(false);
    expect(isRecord(null)).toBe(false);
    expect(isRecord(123)).toBe(false);
  });

  it("arrayInstanceOf should handle empty arrays, property checks and non-arrays", () => {
    expect(arrayInstanceOf([], "any")).toBe(true); // empty arrays pass
    expect(arrayInstanceOf([{ foo: 1 }], "foo")).toBe(true);
    expect(arrayInstanceOf([{ bar: 1 }], "foo")).toBe(false);
    expect(arrayInstanceOf("not array", "foo")).toBe(false);
  });

  it("arrayIsEmpty should return true for undefined and empty arrays", () => {
    expect(arrayIsEmpty(undefined)).toBe(true);
    expect(arrayIsEmpty([])).toBe(true);
    expect(arrayIsEmpty([1])).toBe(false);
    expect(arrayIsEmpty(null)).toBe(false);
  });

  it("objectIsEmpty should treat undefined and objects with no keys as empty (arrays count if no keys)", () => {
    expect(objectIsEmpty(undefined)).toBe(true);
    expect(objectIsEmpty({})).toBe(true);
    expect(objectIsEmpty({ a: 1 })).toBe(false);
    expect(objectIsEmpty([])).toBe(true); // per implementation arrays with no keys are considered empty
    expect(objectIsEmpty(null)).toBe(false);
  });

  it("isUndefined and isNotUndefined behave correctly", () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isNotUndefined(undefined)).toBe(false);
    expect(isNotUndefined(0)).toBe(true);
  });

  it("isNull and isNotNull behave correctly", () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNotNull(null)).toBe(false);
    expect(isNotNull(0)).toBe(true);
  });

  it("string guards: isString, isEmptyString, isNotEmptyString", () => {
    expect(isString("hello")).toBe(true);
    expect(isString(123)).toBe(false);
    expect(isEmptyString("   ")).toBe(true);
    expect(isEmptyString("")).toBe(true);
    expect(isNotEmptyString("text")).toBe(true);
    expect(isNotEmptyString("   ")).toBe(false);
  });

  it("isNumber detects numbers (including NaN) and rejects non-numbers", () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(Number.NaN)).toBe(true);
    expect(isNumber("1")).toBe(false);
  });

  it("isBoolean detects booleans only", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean("true")).toBe(false);
  });

  it("isStringOrNumber accepts strings and numbers only", () => {
    expect(isStringOrNumber("x")).toBe(true);
    expect(isStringOrNumber(10)).toBe(true);
    expect(isStringOrNumber(true)).toBe(false);
    expect(isStringOrNumber({})).toBe(false);
  });

  it("parseObjectString filters non-string values and returns undefined for non-objects", () => {
    const input1 = { a: "1", b: "2" };
    expect(parseObjectString(input1)).toEqual({ a: "1", b: "2" });

    const input2 = { a: "1", b: 2, c: null, d: "ok" };
    expect(parseObjectString(input2)).toEqual({ a: "1", d: "ok" });

    expect(parseObjectString("not an object")).toBeUndefined();
    expect(parseObjectString(null)).toBeUndefined();
  });

  it("parseString returns string or undefined", () => {
    expect(parseString("hello")).toBe("hello");
    expect(parseString(123)).toBeUndefined();
    expect(parseString(undefined)).toBeUndefined();
  });
});
