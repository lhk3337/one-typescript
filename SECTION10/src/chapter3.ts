/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

type A = Exclude<string | boolean, boolean>;
// string 타입 리턴

// 1단계
// Exclude<string, boolean>
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// result

// string | never -> string

// type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

type B = Extract<string | boolean, boolean>;
// boolean 타입 리턴

type Extract<T, U> = T extends U ? T : never;

// 1단계
// Extract<string, boolean>
// Extract<boolean, boolean>

// 2단계
// never
// boolean

// result

// never | boolean -> boolean

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
// T가 typeof funcA면 () => string
// T extends (...args: any) => infer R에 의해 T가 R의 서브타입일때 추론을 해보면 R은 string타입
function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
