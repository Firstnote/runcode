function* generator() {
  const result1 = yield 100;
  console.log(result1, 1);
  const result2 = yield 200;
  console.log(result2, 2);
  const result3 = yield 300;
  console.log(result3, 3);
}
let a = generator();

console.log(a.next(11));
console.log(a.next(22));
console.log(a.next(33));
console.log(a.next(44));
