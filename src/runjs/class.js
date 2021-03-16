// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let qiao = new Person("qiao");

// Person.prototype.getname = function () {
//   console.log(this.name);
// };

// qiao.getname();

class Test {
  constructor(name) {
    this.name = name;
  }
  static gettest(name) {
    return new this(name);
  }
}

const a = Test.gettest(123);
console.log(a);
