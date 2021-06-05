interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
}
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const todo1: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

const todo2: Readonly<Todo> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo1.id = "2232";
todo2.id = "2232";
