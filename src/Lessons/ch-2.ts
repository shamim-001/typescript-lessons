// ! primitive type

let myName: string = "Shamim";
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // Always try to avoid using `any` type

const sum = (a: number, b: number) => {
  return a + b;
};

let postId: string | number; // union type
postId = "abc";
postId = 123;

let isActive: boolean | number | string;

let re: RegExp = /\w+/g;
