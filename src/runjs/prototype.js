class Pr {
  constructor(name) {
    this.name = name;
  }
}

const pr = new Pr(1);
console.log(pr.number);
console.log(pr);

// pr.__proto__.number = 2;
Pr.prototype.number = 2;
Pr.prototype.name = 4;

// console.log(pr.__proto__); //指向原型对象
console.log(pr.number);
console.log(pr);
// console.log(new Pr(1).number);
console.log(pr.__proto__); //指向原型对象
// console.log(Pr.__proto__); //指向构造函数
pr.__proto__.age = 3; // 无法覆盖通过类或者构造函数定义的属性，可以新增或者修改原型上的属性
console.log(pr.age); //指向原型对象
