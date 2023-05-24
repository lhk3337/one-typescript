let user1: { id: number; name: string; age: number; bio: string; location: string } = {
  id: 1,
  name: "user1",
  age: 18,
  bio: "hello",
  location: "seoul",
};
let user2: { id: number; name: string; age: number; bio: string; location: string } = {
  id: 1,
  name: "user2",
  age: 18,
  bio: "hello",
  location: "seoul",
};

// type alias

type User = {
  id: number;
  name: string;
  age: number;
  bio: string;
  location: string;
};

let user11: User = {
  id: 1,
  name: "user1",
  age: 18,
  bio: "hello",
  location: "seoul",
};
let user22: User = {
  id: 1,
  name: "user2",
  age: 18,
  bio: "hello",
  location: "seoul",
};

// type alias warning

function func() {
  type User = { id: number; name: string };

  let funcUser: User = {
    id: 1,
    name: "sss",
  };

  // 해당 타입은 함수 내의 스코프에서만 사용 가능하다.
}

type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
};

// 인덱스 시그니처

// key와 value의 타입의 규칙에 따라 유연하게 타입을 선언하는 문법
// key와 value의 타입만 일치하면 key와 value의 갯수에 상관없이 추가하거나 삭제해도 에러가 발생하지 않는다.
type CountryCode = {
  [key: string]: string;
};

let countrycodes: CountryCode = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

// ! warning
let countryEmptyNumberCode: CountryNumberCodes = {}; // 빈 객체로 선언해도 에러가 발생하지 않는다. 아무런 property가 없기 때문에 타입 규칙을 위반하지 않는다.

// 만일 객체에 key와 value를 명시하려면 type에 key와 타입을 선언한다.
type CountryNumberCode = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCode: CountryNumberCode = {
  Korea: 410,
};

// index signature value는 number이고, 추가한 property인 Korea의 value는 string이면 에러 발생
// 타입을 number로 일치 시키면 에러가 발생하지 않는다.

type CountryNumberAndStringCode = {
  [key: string]: number;
  Korea: string;
};
let countryNumberAndStringCode: CountryNumberAndStringCode = {
  Korea: "ko",
};
