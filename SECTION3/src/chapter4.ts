/**
 * 대수 타입
 * -> 여러개 타입을 합성하여 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union
 */

let a: number | string | boolean; // number, string, boolean union type
a = 1;
a = "Hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hi", false];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Person1 = {
  name: string;
};

type Union1 = Dog | Person | Person1;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};
let union4: Union1 = {
  name: "",
};

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string; // 원시 타입을 교집합으로 선언할 경우 never타입으로 변경된다.

type InterDog = {
  name: string;
  color: string;
};

type InterPerson = {
  name: string;
  language: string;
};

type Intersection = InterDog & InterPerson;

let Intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
