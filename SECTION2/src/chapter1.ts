// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = "123"; type error
// num1.toUpperCase();  string methord error

// string

let str1: string = "hello";
let str2: string = "'hello'";
let str3: string = `hello`;
let str4: string = `hello${str1}`;

// str = 1; type error
// str1.toFixed(); number method error

// boolean

let bool1: boolean = true;
let bool2: boolean = false;

// null

let null1: null = null;

// undefined

let unde1: undefined = undefined;

// 리터럴 타입

let numA: 10 = 10;
// numA = 12; // number 10 만 허용

let strA: "hello" = "hello";
// strA = "h"; // string "hello" 만 허용

let boolA: true = true;
// boolA = false; // boolean true만 허용

// enum 열거형 타입, ts에만 있는 타입

enum Langueage {
  korean = "ko",
  english = "en",
}

enum Role {
  ADMIN,
  USER,
  GUEST,
  langueage = Langueage.korean,
}

const user1 = { name: "master", role: Role.ADMIN, langueage: Role.langueage };
const user2 = { name: "user1", role: Role.USER };
const user3 = { name: "user2", role: Role.GUEST };

// console.log(user1, user2, user3);
