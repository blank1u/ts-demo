// type Includes<T extends any[], U> = U extends T ? true : false;
type Includes<T extends any[], U> = U extends T[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Wamuu">; // expected to be `false`
