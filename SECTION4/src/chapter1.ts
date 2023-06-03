/**
 * 함수 타입 표현식 (function type expression)
 */

// 함수 타입 표현식
type Operation = (a: number, b: number) => number;
const add1: Operation = (a, b) => a + b;
const min1: Operation = (a, b) => a - b;
const mul1: Operation = (a, b) => a * b;

// 함수 호출 시그니쳐

type Operation2 = { (a: number, b: number): number };
const add2: Operation2 = (a, b) => a + b;
const min2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;

// 하이브리드 타입 정의하기
type Operation3 = { (a: number, b: number): number; name: string };
const mul3: Operation3 = (a, b) => a * b;
mul3(1, 2); // ✅
mul3.name; // ✅
