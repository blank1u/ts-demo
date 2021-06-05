/* _____________ Your Code Here _____________ */

type Awaited<T> = T extends Promise<infer X> ? X : never;

type X = Promise<string>;
type Y = Promise<{ field: number }>;

let aaaaaaaaa: Awaited<X>;

// type cases = [
//   Expect<Equal<Awaited<X>, string>>,
//   Expect<Equal<Awaited<Y>, { field: number }>>
// ];
