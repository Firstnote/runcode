// function axios(url){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(url);
//     }, 300);
//   });
// }

// let ajax = function(url){
//   axios(url).then
// }

// ajax(1).then(res=>{
//   console.log(res)
// })
async function async1() {
  console.log("a");
  async2();
  console.log("b");
}

async function async2() {
  console.log("c");
}
console.log("d");
setTimeout(function () {
  console.log("f");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("g");
  resolve();
}).then(function () {
  console.log("h");
});
console.log("i");
