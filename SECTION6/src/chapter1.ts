/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "user1",
  age: 35,
  position: "developer",
  work() {
    console.log("working");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("working");
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("user2", 22, "UI");
console.log(employeeB);

const executiveOfficer = new ExecutiveOfficer("own", 40, "ceo", 1);
console.log(executiveOfficer);

// 클래스는 타입으로 사용한다.
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
