/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입의 특정 프로퍼티만 선택하는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// const legacyPost: Post = {
//   title: "legacyTitle",
//   content: "legacyContent",
// };

const legacyPost: Pick<Post, "content" | "title"> = {
  title: "legacyTitle",
  content: "legacyContent",
};

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // "title" | "content" extends  'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};
// K는 해당 객체의 프로퍼티 키만 올 수 있다.

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// Pick을 이용하여 특정 프로퍼티만 선택할 수 있지만, 선택할 특정 프로퍼티가 많아질 경우 프로퍼티를 나열하는데 힘들 수 있다.
const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Omit를 이용하여 선택안한 프로퍼티를 설정하면, 나머지는 선택한 프로퍼티가 된다.

const noTitleOmitPost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>;
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbnailURL', 'title' >

/**
 * Record<K, V>
 */

type ThumbnailLegacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
  watch: { url: string };
};

type Thumbnail = Record<"large" | "medium" | "small" | "watch", { url: string; size: number }>;
// K = 객체의 프로퍼티의 키를 유니언으로 받음
// V = 키들의 value 타입을 만듬

type Record<K extends keyof any, V> = {
  [key in K]: V;
};
// 무슨 객체인지 모르겠지만 어떤 객체타입의 키타입
