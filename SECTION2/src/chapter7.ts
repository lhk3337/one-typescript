// void

function func1(): void {
  console.log("hello");
}

function func2(): undefined {
  // 오류 발생!
  console.log("hello");
  return undefined;
}

function func3(): null {
  // 오류 발생!
  console.log("hello");
  return null;
}

// let a: void;
// a = undefined;
// "strictNullChecks: false" 일 경우
// a = null;

// never
function func4(): never {
  while (true) {}
}

function func5(): never {
  throw new Error();
}

let anyVar: any;
let a: never;
// a = 1;
// a = null;
// a = undefined;
// a = anyVar;
