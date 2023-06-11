/**
 * 프로미스
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 3000);
// });

// promise.then((response) => console.log(response * 10));

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    // reject("failed");
  }, 3000);
});

promise.then((response) => console.log(response * 10));

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "title",
        content: "content",
      });
    }, 3000);
  });
}
const postRequest = fetchPost();
postRequest.then((post) => {
  console.log(post.id);
});

// 함수 리턴 타입에 제네릭 설정
function fetchPosts(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "title",
        content: "content",
      });
    }, 3000);
  });
}
