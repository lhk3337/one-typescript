/**
 * interface extends
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  //   name: string;
  //   age: number;
  isBark: boolean;
}

interface Cat extends Animal {
  //   name: string;
  //   age: number;
  isScratch: boolean;
}

interface Chicken extends Animal {
  //   name: string;
  //   age: number;
  isFly: boolean;
}

const dog: Dog = {
  name: "hhh",
  age: 11,
  isBark: true,
};

interface Dogs extends Animal {
  name: "user1"; // string literal 타입으로 재정의
  // name: number; // ❌  string 타입이 아닌 number 타입 일 경우 슈퍼 - 서브 타입관계가 성립하지 않으므로 에러 발생
  isBark: boolean;
}
const do1: Dogs = {
  name: "user1",
  age: 11,
  isBark: true,
};

type Animal1 = {
  name: string;
  age: number;
};

interface Dog extends Animal1 {
  isBark: boolean;
}

interface Dog1 {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat1 {
  name: string;
  age: number;
  isScratch: boolean;
}

interface DogCat extends Dog1, Cat1 {}

const dogcat: DogCat = {
  name: "",
  age: 4,
  isBark: true,
  isScratch: false,
};
