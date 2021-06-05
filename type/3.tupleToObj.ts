const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type tupleType = typeof tuple;

// console.log(tupleType); 对象

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

const TupleToObject222: TupleToObject<tupleType> = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};
