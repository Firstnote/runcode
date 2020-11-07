const name = 321;
const obj = {
  name: 123,
  foo: () => {
    console.log(this.name);
  },
};
obj.foo(); //undefined
const obj2 = {
  name: 123,
  foo() {
    bar = () => {
      console.log(this.name);
    };
    bar();
  },
};
obj2.foo(); //123
// this是定义在函数体内的，指向函数的调用对象
// 一句话：沿着作用域向上寻找最近的一个**function**（含function省略写法），注意是function，不是箭头函数。看这个function是如何调用的
// 箭头函数中没有this的定义，因此会向上寻找定义了this的函数
