/**
 * 조건부 타입
 */

type A = number extends string ? string : number;
// type A는 string이 number타입의 슈퍼타입이 아니라서 false인 number타입으로 추론된다.
const a: A = 1;

type ObjA = { a: number };
type ObjB = { a: number; b: string };

type B = ObjB extends ObjA ? number : string;

// 제네릭을 이용한 조건부 타입 선언하기

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // let varA: string

let varB: StringNumberSwitch<string>; // let varB: number

// ==================================================================

// function removeSpace(text: string) {
//   return text.replaceAll(" ", "");
// }

// let result = removeSpace("hello good moring");
// result.toUpperCase();

// ==================================================================

// function removeSpace(text: string | undefined | null) {
//   return text.replaceAll(" ", ""); // ❌
// }

// let result = removeSpace("hello good moring");

// ==================================================================

// function removeSpace(text: string | undefined | null) {
//   if (typeof text === "string") {
//     return text.replaceAll(" ", "");
//   } else {
//     return undefined;
//   }
// }

// let result = removeSpace("hello good moring"); // string | undefined

// ==================================================================

// function removeSpace<T>(text: T): T extends string ? string : undefined {
//   if (typeof text === "string") {
//     return text.replaceAll(" ", ""); // ❌
//   } else {
//     return undefined; // ❌
//   }
// }
// let result = removeSpace("hello good moring");
// result.toUpperCase();

// ==================================================================

// function removeSpace<T>(text: T): T extends string ? string : undefined {
//   if (typeof text === "string") {
//     return text.replaceAll(" ", "") as any;
//     return 0 as any; // 문제 감지 못함
//   } else {
//     return undefined as any;
//   }
// }

// let result = removeSpace("hello good moring");
// // string

// let result2 = removeSpace(undefined);
// // undefined

// ==================================================================
function removeSpace<T>(text: T): T extends string ? string : undefined;
function removeSpace(text: any) {
  if (typeof text === "string") {
    // return 0; // ❌
    return text.replaceAll(" ", "");
  } else {
    // return 0; // ❌
    return undefined;
  }
}

let result = removeSpace("hello good moring");
// string
result.toUpperCase();

let result2 = removeSpace(undefined);
// undefined
