// unknown

let a: unknown = 1; // number -> unknown
let b: unknown = "hello"; // string -> unknown
let c: unknown = true; // boolean -> unknown
let d: unknown = null; // null -> unknown
let e: unknown = undefined; // undefined -> unknown
let f: unknown = []; // Array -> unknown
let g: unknown = {}; // Object -> unknown
let h: unknown = () => {}; // Function -> unknown

let unknownValue: unknown;

let aa: number = unknownValue; // 오류 : unknown 타입은 number 타입에 할당할 수 없습니다. ❌

//never
function errorFunc(): never {
  throw new Error();
}

let neverA: number = errorFunc(); // never -> number
let neverB: string = errorFunc(); // never -> string
let neverC: boolean = errorFunc(); // never -> boolean
let neverD: null = errorFunc(); // never -> null
let neverE: undefined = errorFunc(); // never -> undefined
let neverF: [] = errorFunc(); // never -> Array
let neverG: {} = errorFunc(); // never -> Object

// void
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
  return undefined;
}

let voidVar: void = undefined;
// any

function anyExam() {
  function errorFunc(): never {
    throw new Error();
  }
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownValue;
  undefinedVar = anyVar;
  anyVar = errorFunc();
  errorFunc() = anyVar; // any -> never ❌
}
