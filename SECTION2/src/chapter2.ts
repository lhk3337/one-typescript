// 배열

let numArr: number[] = [1, 2, 3, 4];

let stringArr: string[] = ["hi", "name", "age"];

let boolArr: Array<boolean> = [true, false, false];

// 배열 요소 타입이 여러가지인 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 : typescript에만 존재하는 배열 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ["1", "2"];

let tup2: [number, string, boolean] = [1, "2", true];

// tup2 = [1];
// tup2 = ["2", 1, true];

// 튜플을 js로 변환하면 배열로 변경된다. 그렇기 때문에 배열 메서드를 사용하면 튜플의 기능이 없어지므로 사용에 주의해야 한다.
tup2.push(1);
console.log(tup2); // [ 1, '2', true, 1 ]

const users: [string, number][] = [
  ["user1", 1],
  ["user2", 2],
  ["user3", 3],
  ["user4", 4],
  [5, "h"], // 오류 발생
];
// 배열의 요소를 string과 number로 지정하였는데, 타입을 잘못 지정해서 삽입했다면 오류를 발생 시킨다.
