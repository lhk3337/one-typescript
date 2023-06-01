/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  // value.toFixed(); // ❌
  // value.toUpperCase(); // ❌
  if (typeof value === "number") {
    // type guard
    return value.toFixed(2);
  } else if (typeof value === "string") {
    return value.toUpperCase();
    // } else if (typeof value === "object") {
    // 여기에 Date뿐만 아니라 null값도 통과
  } else if (value instanceof Date) {
    // value가 Date 객체인지 판별
    return value.getTime();
  } else if (value && "age" in value) {
    // in 뒤에 타입은 undefined나 null이 올수 없음
    // value가 true 일때 "age" in value 실행
    return `${value.name}은 ${value.age}살 입니다.`;
  }
}
console.log(func(24.2222));
console.log(func("hello"));
console.log(func(new Date()));
const value = { name: "user1", age: 24 };
console.log(func(value));
