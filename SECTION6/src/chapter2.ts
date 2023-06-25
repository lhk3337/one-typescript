/**
 * 접근 제어자
 */

class Employee {
  // 필드
  private name: string; // private를 선언하면 class내에서만 사용가능 하다.
  protected age: number; // protected를 선언하면 class와 상속받은 클래스만 사용 가능한다.
  public position: string; // public을 선언하면 모든 곳에서 선언이 가능하다.

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name}`);
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("user1", 22, "developer");
// employee.name = "user2";
employee.work();

// constructor 함수에 매개변수에 접근 제어자를 선언하면 필드에 자동으로 프로퍼티가 자동적으로 선언된다.
// constructor 함수에 this로 선언된 선언식을 생략해도 자동으로 매개변수가 프로퍼티로 값으로 전달된다.
class Employee1 {
  // 필드

  // 생성자
  constructor(private name: string, protected age: number, public position: string) {}

  // 메서드
  work() {
    console.log(`${this.name}`);
  }
}
