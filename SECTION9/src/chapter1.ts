/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let c: StringNumberSwitch<number | string>;
// let c는 분리되어 아래와 같이 두가지 유니언 타입을 가지게 된다.

// StringNumberSwitch<number> |
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// 1단계

// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계

// boolean extends number ? string : number => number |
// number extends number ? string : number => string |
// string extends number ? string : number => number

// 결과
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// number |
// never |
// boolean

// 결과
// number | boolean
// T와 U가 같은 타입이면 그 타입을 배제 시킨다.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// string
// T와 U가 같은 타입이면 그 타입만 추론한다.

// 분산적인 조건 타입을 막는 방법
type StringNumberSwitchs<T> = [T] extends [number] ? string : number;
let e: StringNumberSwitch<boolean | number | string>;
