/**
 * 타입 단언
 *
 * */

type Person = {
  name: string;
  age: number;
};
let person = {} as Person;
person.name = "hello";
person.age = 11;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "백구",
  color: "white",
  breed: "jindo",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 타입
 * A가 B의 서브타입 이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // 타입이 겹치는 부분이 없기 때문에 에러 발생

// 다중 단언
let num4 = 10 as unknown as string; // 좋은 방법은 아님

/**
 * const 단언
 */

let name4 = 10 as const;
// name4 = 1;  // ❌

let cat = {
  name: "cats",
  color: "yellow",
} as const;

// cat.name = "dog"; // ❌
// let cat: {readonly name: "cats"; readonly color: "yellow";}
// 프로퍼티들은 readonly가 되어 값을 수정할 수 없다.

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "title1",
  author: "user1",
};

// const len: number = post.author?.length;
// author를 선택적 프로퍼티로 지정하면 author는 string | undefined 유니언 타입으로 지정된다.
// post.author 타입이 undefined도 포함 되어 있어서 length 메서드와 undefined 타입이 일치 하지 않기 때문에 에러가 발생한다.
// 에러를 수정하기 위해서 author의 undefined타입을 Non Null 단언하여 undefined 타입이 아니라고 단언 한다.

const len2: number = post.author!.length; // Non Null 단언
console.log(len2);
