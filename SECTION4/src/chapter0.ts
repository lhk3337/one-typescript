/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 이떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 변환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}
console.log(func(1, 2));

/**
 * 화살표 함수 타입을 정의
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "HK", age: number, tall?: number) {
  // 선택적 매개변수 뒤에 필수 매개변수를 선언하면 에러가 발생하여 선택적 매개변수를 제일 마지막에 위치한다.
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("aaa", 22, 10);
introduce("aaa", 22);

// rest parameter 함수 타입 정의
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((v) => (sum += v));
  return sum;
}
console.log(getSum(1, 2, 3));
console.log(getSum(1, 2, 3, 4, 5));

// rest parameter의 배열 number 리터럴 타입 선언
function getSum1(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((v) => (sum += v));
  return sum;
}
console.log(getSum1(1, 2, 3));
// console.log(getSum(1, 2, 3, 4, 5));
