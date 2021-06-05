interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
// interface Todo 与 type Todo2 等价
type Todo2 = {
  title: string;
  description: string;
  completed: boolean;
};
interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
  // P in k （遍历枚举K，设限为K的Key）
  // T[P] 取泛型P的值类型
};

type q1 = MyPick<Todo2, "title" | "completed">;
type q2 = Pick<Todo, "title" | "completed">;

let object1: q1 = {
  title: "2323",
  completed: true,
};

let object2: q2 = {
  title: "2323",
  completed: true,
};
