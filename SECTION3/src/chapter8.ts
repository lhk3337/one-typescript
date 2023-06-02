/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입으로만 이루어진 유니온 타입
 * 예) number 타입과 string 타입관계
 */
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;
// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  //   if ("kickCount" in user) {
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명을 강퇴했습니다.`);
  //   } else if ("point" in user) {
  //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  //   } else {
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  //   }

  //   if (user.tag === "ADMIN") {
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명을 강퇴했습니다.`);
  //   } else if (user.tag === "MEMBER") {
  //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  //   } else {
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  //   }

  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명을 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
  }
}

/**
 *
 * 복습겸 사례
 */
// 비동기 작업의 결과를 처리하는 문제

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: { message: string };
//   response?: { data: string };
// };

// 서로소 유니온 타입으로 선언하기

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: { message: string };
};
type SuccessTask = {
  state: "SUCCESS";
  response: { data: string };
};
type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지 출력
// 성공 -> 성공 : 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log(task.state);
      break;
    case "FAILED":
      console.log(task.error.message);
      break;
    case "SUCCESS":
      console.log(task.response.data);
      break;
  }
}

const loading: AsyncTask = { state: "LOADING" };
const failed: AsyncTask = { state: "FAILED", error: { message: "error 404" } };
const success: AsyncTask = { state: "SUCCESS", response: { data: "data" } };
processResult(success);
