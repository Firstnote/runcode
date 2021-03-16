function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function getPositionRight(x, y) {
  return y >> x;
}
let x = 0;
let y = 9;
let a = getBaseLog(x, y);
let b = getPositionRight(x, y);
console.log(a, b);
