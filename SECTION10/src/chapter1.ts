/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "title1",
  content: "desc....",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "title2",
  tags: ["post1"],
  content: "desc....",
  thumbnailURL: "https://.....",
};

/** Readonly<T>
 * -> 읽기전용, 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readOnlyPost: Readonly<Post> = {
  title: "guard content",
  tags: [],
  content: "",
};
// readOnlyPost.content = "1111";
// readOnlyPost.title = "hack content";
