/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> 매개변수가 1개 -> 매개변수에 20을 곱한 값 출력
 * -> 매개변수가 3개 -> 매개변수들을 다 더한값을 출력
 */
// Javascript에서는 사용되지 않고, Typescript에서만 사용가능

// 버전들, 선언부 -> 오버로딩 시그니쳐

function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
// 첫번째 오버로딩 시그니쳐에는 매개변수 a의 타입만 존재 하기 떄문에
// 구현부 함수의 매개변수 b, c는 선택적 프로퍼티를 선언한다.

func(); // ❌ 오버로딩 버전에 없음
func(1); // ✅ 오버로딩 시그니쳐 첫번째 버전에 따름
func(1, 2); // ❌ 오버로딩 버전에 없음
func(1, 2, 3); // ✅ 오버로딩 시그니쳐 두번째 버전에 따름

// 오버로딩 시그니쳐를 선언하게 되면, 구현부의 매개변수 갯수나 타입에 따르지 않고 오버로딩 시그니쳐 버전에 따른다.
