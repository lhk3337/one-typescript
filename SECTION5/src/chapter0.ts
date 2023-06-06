/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  //   sayHi: () => void;
  sayHi(): void; //   sayHi: () => void와 같음
  sayHi(a: number, b: number): void;
  // 메서드의 오버로딩을 구현하려면 타입을 호출 시그니쳐로 선언하는 것을 권장
}

const person: Person = {
  name: "HK",
  sayHi: function () {
    console.log("Hi");
  },
};
// type alias는 union, intersection이 가능하지만 interface는 직접적으로 선언하지 못한다.
type Type1 = number | string;
type Type2 = number & string;
// interface를 union, intersection로 선언하고 싶으면 type alias로 선언하거나 타입 주석에 직접적으로 사용해야 한다.
type Types1 = number | string | Person;
type Types2 = number & string & Person;

const p1: Person | number = {
  name: "HH",
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "HHH";

//하이브리드 타입
interface Func2 {
  (a: number): string;
  b: boolean;
}

const func2: Func2 = (a) => "hello";
func2.b = true;
