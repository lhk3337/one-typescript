/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1234,
  key2: 123124,
};

interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: false,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스 활용
 * -> 유저 관리 프로그램
 * -> 우저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User1 {
  name: string;
  profile: Student | Developer;
}

function goToSchool1(user: User1) {
  if (user.profile.type !== "student") {
    console.log("여기가 아닙니다.");
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}
const developerUser1: User1 = {
  name: "user1",
  profile: {
    type: "developer",
    skill: "frontend",
  },
};
goToSchool1(developerUser1);

const studentUser1: User1 = {
  name: "user2",
  profile: {
    type: "student",
    school: "highschool",
  },
};

interface User2<T> {
  name: string;
  profile: T;
}

function goToSchool2(user: User2<Student>) {
  if (user.profile.type !== "student") {
    console.log("여기가 아닙니다.");
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser2: User2<Developer> = {
  name: "user1",
  profile: {
    type: "developer",
    skill: "frontend",
  },
};
const studentUser2: User2<Student> = {
  name: "user2",
  profile: {
    type: "student",
    school: "highschool",
  },
};
goToSchool2(studentUser2);
// goToSchool2(developerUser2);
