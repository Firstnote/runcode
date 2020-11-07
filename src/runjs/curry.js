// function get(age) {
//   return function (num) {
//     return age + num;
//   };
// }
// let get = (age) => (num) => num + age;

// console.log(get(19)(20));
function getSum(a, b, c) {
  return a + b + c;
}
console.log(getSum.length);
const curried = curry(getSum);

console.log(curried(1)(2, 3));
console.log(curried(1, 2)(3));
console.log(curried(1, 2, 3));
console.log(curried(1)(2)(3));
function curry(func) {
  return function curriedFn(...args) {
    if (args.length < func.length) {
      return function (...ar) {
        return curriedFn(...args.concat(ar));
      };
    } else {
      return func(...args);
    }
  };
}

let arr = [
  1,
  3,
  5,
  5,
  9,
  7,
  7,
  3,
  12,
  6,
  13,
  8,
  8,
  11,
  4,
  9,
  7,
  10,
  11,
  2,
  11,
  6,
  8,
  4,
  14,
  6,
  7,
  6,
  6,
  10,
  3,
  7,
  9,
  10,
  5,
  9,
  1,
  7,
  10,
  5,
];
// let curry = func =>
var sumEqual = arr.reduce((prev, current, index, arr) => {
  return prev + current;
});
console.log(sumEqual);
