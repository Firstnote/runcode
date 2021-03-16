// 数值截断函数
function toFixed(num, fixed) {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return Number(num.toString().match(re)[0]).toFixed(fixed);
}
let num = toFixed(20.4354, 2);
// num = num.toFixed(2);
console.log(num);
