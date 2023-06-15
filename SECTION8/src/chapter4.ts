/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "..........";
// Color타입에 red가 변경되면 ColoredAnimal의 red-dog, red-cat의 red를 하나하나 변경되어야 하는 불편함이 발생한다.

type ColorAnimal = `${Color}-${Animal}`;
// 백틱을 이용하여 리터럴 타입을 선언하면 된다.
// type ColorAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" | "black-chicken" | "green-dog" | "green-cat" | "green-chicken"
const coloredAnimal: ColorAnimal = "red-cat";
