type If<T extends boolean, U, F> = T extends false ? F : U;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
