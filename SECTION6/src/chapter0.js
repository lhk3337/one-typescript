/**
 * 클래스
 */

let studentA = {
  name: "user1",
  grade: "A",
  age: 22,
  study() {
    console.log("study hard");
  },
  introduce() {
    console.log("Hello");
  },
};

let studentB = {
  name: "user2",
  grade: "B",
  age: 20,
  study() {
    console.log("study hard");
  },
  introduce() {
    console.log("Hello");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log("study hard");
  }
  introduce() {
    console.log(`Hello I am ${this.name}.`);
  }
}

// 클래스 상속
class StudentDeveloper extends Student {
  // 필드

  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  study() {
    console.log("study hard");
  }
  introduce() {
    console.log(`Hello I am ${this.name}.`);
  }
  programming() {
    console.log(`my best program-lang is ${this.programming}`);
  }
}

const studentDeveloper = new StudentDeveloper("users", "A+", 30, "Typescript");
console.log(studentDeveloper);
// // 클래스를 이용하여 만든 객체 -> 인스턴스
// // student instance
// let studentInstanceA = new Student("user1", "A+", 18);
// console.log(studentInstanceA);

// studentInstanceA.study();
// studentInstanceA.introduce();
