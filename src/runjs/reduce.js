const a = [
  [1, 2],
  [3, 4],
  [5, 6],
];
var b = a.reduce((pre, aft) => {
  return pre.concat(aft);
});
console.log(b);
