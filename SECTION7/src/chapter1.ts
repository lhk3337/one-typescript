/**
 * example1
 */
function swap<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * example2
 */

function returnFirstValue<T>(data: T[]): T {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue(["hello", "good"]);

function returnFirstValue<T>(data: [T, ...unknown[]]): T {
  return data[0];
}

function returnFirstValue<T, U>(data: [T, ...U[]]): T {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue(["hl", false, "hello", "good"]);

/**
 * example3
 */
// 타입 변수 조건
function getLength(data: any) {
  return data.length;
}
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
let var4 = getLength(10);
