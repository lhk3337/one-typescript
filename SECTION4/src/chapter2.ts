/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는지 유무
 * 2. 매개변수의 타입이 호환되느나에 따른 유무
 */

// 반환값의 타입이 호환되는지 유무

type A = () => number;

type B = () => 10;

let a: A = () => 10; // number type
let b: B = () => 10; // number literal type

a = b; // a(number) <- b(number literal type), 업캐스팅
// b = a; ❌   b(number literal type) <- a(number), 다운캐스팅

// 매개변수의 타입이 호환되는지 유무
//매개변수의 갯수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};
// c = d; ❌
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let DogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = DogFunc; // ❌ 슈퍼타입 <- 서브타입 (업캐스팅)
DogFunc = animalFunc; // ✅ 서브타입 <- 슈퍼타입 (다운캐스팅)

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

//매개변수의 갯수가 다를 때
// 타입이 같은 매개변수에서 함수의 매개변수가 더 적을때만 호환이 된다.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};
func1 = func2; // ✅
// func2 = func1; // ❌
