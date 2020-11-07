new Promise((resolve, reject) => {
  console.log("初始化");

  resolve();
  reject();
})
  .then(() => {
    throw new Error("有哪里不对了");

    console.log("执行「这个」”");
  })
  .catch(() => {
    console.log("执行「那个」");
  })
  .then(() => {
    console.log("执行「这个」，无论前面发生了什么");
  });
Promise.resolve(1)
  .then(2)
  .then((res) => Promise.resolve(3))
  .then(console.log);

let fake = new Promise((resolve, reject) => {
  console.log(resolve.nn);
  resolve(2);
});
let time = new Date();
while (new Date() - time < 3000) () => {};
let fn = (res) => {
  console.log(123, res);
};
fn.nn = 321;
fake.then(fn);
