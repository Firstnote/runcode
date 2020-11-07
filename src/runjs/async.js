// function test() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			let res = 3;
// 			resolve(res);
// 		}, 1000);
// 	});
// }
// async function runcode() {
//   let a = 1
// 	a = await test();
//   // return response;
//   // response.then(res=>{
//   //   a = res
//   // })
//   console.log(a)
// }

// // runcode().then((res) => {
// // 	console.log(res);
// // });
// runcode()
// console.log(15);
// async function promise(){
//   return 1
// }
// // console.log(promise())
// promise().then(res=>{
//   console.log(29,res)
// })

function runcode1() {
  let foo = 100;
  async function main() {
    let res = await Promise.resolve(10);
    foo = foo + res;
    console.log("main", foo);
  }
  main();
  foo++;
  console.log("gl", foo);
}

function runcode2() {
  let foo = 100;
  async function main() {
    foo = foo + (await Promise.resolve(10));
    console.log("main", foo);
  }
  main();
  foo++;
  console.log("gl", foo);
}

runcode1(); //gl 101,main 111
runcode2(); //gl 101,main 110
