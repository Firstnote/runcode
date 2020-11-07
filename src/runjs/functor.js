class Container {
  #value; // 私有属性约定#开头，它们只能在类里面中读取或写入。
  constructor(value) {
    this.#value = value;
    this.name = this.#value;
  }
  map(fn) {
    return this;
  }
}
console.log(new Container(5).map());
