// any 타입

let value: any = 10;
value = "hello";

let number1: number = 1;

number1 = value; // valuer값을 number1에 값을 할당, any를 선언하지 않으면 에러 발생
console.log(number1); // hello

value = "hello";
console.log(value);

// unknown 타입

let num: number = 10;
let unknownVar: unknown;

unknownVar = () => {};
unknownVar = 1;
unknownVar = "hello";

// num = unknownVar; // unknown선언한 변수를 다른 변수에 할당하면 에러 발생
console.log(unknownVar);

//  unknown 타입의 값을 다른 타입으로 취급해야 할 경우

let numUnknown: unknown;
if (typeof unknownVar === "number") {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  console.log(unknownVar * 2);
}
// numUnknown * 2; // unknown으로 타입을 설정하면 연산도 불가능

function printName(person: unknown) {
  if (typeof person === "string") {
    console.log(person.toUpperCase()); // OK: 'person'이 'string' 타입일 때만 사용 가능
  } else {
    console.log("Unknown name");
  }
}

printName("Alice"); // ALICE
printName(123); // Unknown name
