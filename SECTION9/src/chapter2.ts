/**
 * infer
 * inference -> 추론하다.
 */

// type Func = () => string;

// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<Func>;

// =================================================================

// type FuncA = () => string;

// type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<FuncA>; // string

// type B = ReturnType<FuncB>; // never

// =================================================================

// type FuncA = () => string;

// type FuncB = () => number;

// type ReturnType<T> = T extends () => infer R ? R : never;

// type A = ReturnType<FuncA>; // string

// type B = ReturnType<FuncB>; // number

// type C = ReturnType<number>; // never
// =================================================================

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
