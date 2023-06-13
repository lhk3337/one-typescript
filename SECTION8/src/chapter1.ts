/**
 * indexed access type
 */

// 객체 타입 변경하기

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number; // new property
  };
}

function printAuthorInfo1(author: { name: string; id: number; age: number }) {
  console.log(`${author.name}-${author.id}`);
}

// indexed access type
function printAuthorInfo2(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}
// function printAuthorInfo3(author: Post["what"]) {
//   // ❌
//   console.log(`${author.id} - ${author.name}`);
// }

function printAuthorInfo4(author: Post["author"]["id"]) {
  //   console.log(`${author.id} - ${author.name}`);
}

const post: Post = {
  title: "post title",
  content: "main",
  author: {
    id: 1,
    name: "user1",
    age: 18,
  },
};

// 배열 타입 변경하기

type Postlist = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 배열의 한 요소의 타입을 추출
const postlist: Postlist[number] = {
  title: "post title",
  content: "main",
  author: {
    id: 1,
    name: "user1",
    age: 18,
  },
};

const postlist2: Postlist[0] = {
  title: "post title",
  content: "main",
  author: {
    id: 1,
    name: "user1",
    age: 18,
  },
};

// const num = 0;

// const postlist3: Postlist[num] = {
//   title: "post title",
//   content: "main",
//   author: {
//     id: 1,
//     name: "user1",
//     age: 18,
//   },
// };
// ❌ index에 들어가는 것은 타입만 올 수 있음

//  배열의 한 요소의 객체 author의 타입을 추출
function printAuthorInfo5(author: Postlist[number]["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// 튜플의 요소 추출하기

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // ❌ Tup[3]의 요소가 없음

type TupNum = Tup[number]; // string | number | boolean의 유니언타입으로 추출
