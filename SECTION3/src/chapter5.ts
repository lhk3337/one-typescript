/**
 *
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = { name: "HK", age: 20 };

let { name, age } = c; // let name :string,  let age: number

let [one, two, three] = [1, "hi", true]; // let one :number, let two: string, let three: boolean

function func() {
  return "hello";
}
// function func(): string

function func2(message = "hi") {
  return "hello";
}

// 암묵적 any type
let d; // any
d = 10; // number
d.toFixed();
d = "hello"; // number -> string
d.toUpperCase();

// const로 선언한 상수의 타입은 리터럴 타입으로 추론한다.
const num = 10; // const num: 10
const str = "hello"; // const str: "hello"

let arr = [1, "hello"]; // let arr: (string | number)[]
