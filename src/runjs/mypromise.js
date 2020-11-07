const FULLFILLED = "fullfilled"; //成功状态
const PENDING = "pending"; //初始状态
const REJECTED = "rejected"; //失败状态

class Mypromise {
  status = PENDING;
  //成功回调
  success = [];
  //失败回调
  fail = [];
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }
  resolve = (res) => {
    if (this.status !== PENDING) return;
    this.status = FULLFILLED;
    this.res = res; //将执行成功的结果传入实例
    while (this.success.length) this.success.shift()(res);
  };
  reject = (rej) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.rej = rej; //将执行失败的结果传入实例
    while (this.fail.length) this.fail.shift()(rej);
  };
  then = (success, fail) => {
    // 回调需要有返回值，如果没有，则将上一个的结果传入resolve
    let promise = new Mypromise((res, rej) => {
      // 调用then的时候传入两个函数，这两个函数会在不同情况下分别执行
      if (this.status === FULLFILLED) {
        //如果当前状态为成功则调用成功的方法
        let x = success && success(this.res);
        resolvePromise(x, res, rej, this.res);
      } else if (this.status === REJECTED) {
        fail && fail(this.rej);
      } else {
        // pending时将回调存储起来
        this.success.push(success);
        this.fail.push(fail);
      }
    });
    return promise;
  };
  catch = (rej) => {
    rej && rej(this.rej);
  };
}
function resolvePromise(x, res, rej, pre) {
  if (x instanceof Mypromise) {
    //如果是当前类的实例对象
    x.then(res, rej);
  } else if (x !== undefined) {
    //如果是普通值
    res(x);
  } else {
    res(pre);
  }
}
let test = new Mypromise((res, rej) => {
  // setTimeout(() => {
  res(232);
  // }, 1000);
});
console.log(1, test);
test
  .then((res) => {
    console.log(11, res);
  })
  .then((res) => {
    console.log(22, res);
    return 333;
  })
  .then((res) => {
    console.log(33, res);
  });
// test.then((res) => {
//   console.log(22, res);
// });
// test.then((res) => {
//   console.log(33, res);
// });
// console.log(2, test);
