type con1 = 1 | 2 | 3 | 4;
interface I11111111111111 {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}

type myExclude<T, U> = T extends U ? never : T;

let obj222: Exclude<con1, 1>;
let obj2222222: Exclude<keyof I11111111111111, 1>;

let obj2222: myExclude<con1, 1>;
let obj22222: myExclude<keyof I11111111111111, 1>;
