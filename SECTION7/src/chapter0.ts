/**
 * 제네릭
 */

function func(value: any) {
  return value;
}
let num = func(10);
let str = func("string");

num.toUpperCase();
// num의 리턴 타입은 number이지만 any로 타입을 선언했기 때문에 string의 메서드를 선언해도 에러가 발생하지 않았다.

function func(value: unknown) {
  return value;
}
let num = func(10);
let str = func("string");

num.toUpperCase(); // ❌
num.toFixed(); // ❌ toFixed는 number타입의 메서드인데 에러가 발생하였다.

/** 타입 가드 이용 */
function func(value: unknown) {
  return value;
}
let num = func(10);
let str = func("string");

if (typeof num === "number") {
  num.toFixed();
}

// type T는 함수를 호출할때 타입이 정해진다.
function func<T>(value: T): T {
  return value;
}
let num = func(10);
let str = func("string");
let bool = func(false);

function func<T>(value: T): T {
  return value;
}

let num = func(10);
let str = func("string");
let arr = func<[number, number, number]>([1, 2, 3]);
