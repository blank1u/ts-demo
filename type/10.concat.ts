type Concat<T extends any[], U extends any[]> = [...T, ...U];

let aaadd: Concat<[1 | 2 | 3], [1, 4 | 5]>;
