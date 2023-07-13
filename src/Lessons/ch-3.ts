//! Array
let bands: string[] = [];
bands.push("van helen");

//! Tuple
// It can hold a fixed number of elements of different types. It is similar to an array, but the order of the elements is important.
const tuple: [number, string, boolean] = [1, "hello", true];

let mixed = [1, "hello", true];

tuple[1] = "";

//! Object
// type Guitarist = {
//   name: string;
//   active?: boolean;
//   album: (string | number)[];
// };

interface Guitarist {
  name?: string; // ? means optional
  active: boolean;
  album: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  album: [1994, "acb"],
};

let jp: Guitarist = {
  name: "Shamim",
  active: true,
  album: ["hena", 5, "desh"],
};

//! method
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return `Hello!`;
};

console.log(greetGuitarist(evh));

// ! enum

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.D);
