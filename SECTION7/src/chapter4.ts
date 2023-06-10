/**
 * 제네릭 클래스
 */

class NumberList {
  constructor(private list: number[]) {}
  push(data: number) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

class StringList {
  constructor(private list: string[]) {}
  push(data: string) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
const stringList = new StringList(["1", "2", "3"]);

numberList.pop();
numberList.push(4);
numberList.print();

stringList.pop();
stringList.push("4");
stringList.print();

// 제네릭 클래스 선언하기
class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}
const genericNumberList = new List([1, 2, 3]);
const genericStringList = new List(["1", "2", "3"]);

genericNumberList.pop();
genericNumberList.push(4);
genericNumberList.print();

genericStringList.pop();
genericStringList.push("4");
genericStringList.print();
