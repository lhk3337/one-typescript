// 객체 리터럴 타입
let user: { id: number; name: string } = {
  id: 1,
  name: "user1",
};
user.id;

// 구조적 타입 시스템

// 선택적 property
let users: { id?: number; name: string } = {
  id: 1,
  name: "user1",
};

users = {
  name: "user2",
};

// readonly

let config: {
  readonly apiKey: string;
} = { apiKey: "My Api Key" };

config.apiKey = "aweofiajwe";
