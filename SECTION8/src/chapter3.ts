/**
 * 맴드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 한명의 유저 정보 정보를 불러오는 기능

function fetchUser(): User {
  return { id: 1, name: "user", age: 18 };
}

// 한명의 유저 정보를 수정하는 기능

interface PartialUser {
  id?: number;
  name?: string;
  age?: number;
}
// User interface와 중복

function updateUser(user: PartialUser) {}

updateUser({ age: 20 }); // 변경되는 값만 보내고 싶을때

// 맵드 타입
// 만일 프로퍼티 갯수가 많아지만 keyof 연산자를 사용하면된다.
type PartialUsers = {
  [key in "id" | "name" | "age"]?: User[key]; // 선택적 property
};

type PartialUsertypeof = {
  [key in keyof User]?: User[key];
}; // 맵드 and keyof 방식

// property 키가 무엇인지 정의, key가 "id", "name", "age"
// property키들이 어떤 value타입을 가질 것인지 정의, User["id"] | User["name"] | User["age"]
// {id :  User["id"]; name :  User["name"]; age :  User["age"]}

// 제네릭 선언 방식
type PartialUsergen<T> = {
  [key in keyof T]?: T[key];
};
function updateUsergen(user: PartialUsergen<User>) {}

updateUsergen({ age: 20 });

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
}; // 맵드 방식

type BooleanUsers = {
  [key in keyof User]: boolean;
}; // 맵드 and keyof 방식

// 반환값이 readonly일 경우
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}; //  맵드 and keyof 방식

function readonlyUser(): ReadonlyUser {
  return { id: 1, name: "user", age: 18 };
}
const user = readonlyUser();
// user.id = 1; ❌
