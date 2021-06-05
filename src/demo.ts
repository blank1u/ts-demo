// 运算符
let b = null ?? 10;
console.log(b, "b");

// 操作符
interface I {
  name: string;
  age: number;
}

// 1、keyof（获取接口的key）
type IKey = keyof I;
let obj1: Record<IKey, I> = {
  name: {
    name: "string",
    age: 11,
  },
  age: {
    name: "string",
    age: 11,
  },
};
// 2、typeof（获取实例的类型）
let a1: typeof obj1 = {
  name: {
    name: "string",
    age: 11,
  },
  age: {
    name: "string",
    age: 11,
  },
};

// 强制KEY类型校验
let obj3 = {
  name: "milu",
  age: 10,
};
function getObjKey<T extends object, K extends keyof T>(o: T, k: K): T[K] {
  return o[k];
}

let get111 = getObjKey(obj3, "name");

console.log(get111);
