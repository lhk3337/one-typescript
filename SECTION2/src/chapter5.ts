// enum 열거형 타입, ts에만 있는 타입
// 여러가지 값들에 각각 이름을 부여해 열거하고 사용하는 타입

enum Language {
  korean = "ko",
  english = "en",
}

enum Role {
  ADMIN,
  USER,
  GUEST,
}

const user1 = { name: "master", role: Role.ADMIN, language: Language.korean };
const user2 = { name: "user1", role: Role.USER, language: Language.english };
const user3 = { name: "user2", role: Role.GUEST, language: Language.korean };

// console.log(user1, user2, user3);

// enum value output
enum Animal {
  CAT,
  LION,
  PIG,
}

let hero = Animal[0];
console.log(hero); // CAT

// Combined enum

enum Work {
  Life = 0,
  LestTime = "OK",
}
