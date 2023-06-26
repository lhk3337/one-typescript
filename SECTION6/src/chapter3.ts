/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}
// implements 구현하다
class Character implements CharacterInterface {
  name: string;
  moveSpeed: number;
  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  move(): void {
    console.log(`${this.moveSpeed} speed`);
  }
}

const character = new Character("user1", 100);
character.move();

// interface로 정의한 필드들은 무조건 public필드만 정의해야 한다

class Characters implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number, private power: string) {}
  move(): void {
    console.log(`${this.moveSpeed} speed`);
  }
}
const characters = new Character("user1", 100);
characters.move();
