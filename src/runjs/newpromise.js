// const pro = new Promise((res) => {
//   console.log("new");
//   setTimeout(() => {
//     console.log(3000);
//   }, 3000);
// });

// let ready, read2;
// const pro = new Promise((res) => {
//   console.log(222);
//   ready = res;
// });

// pro.then((res) => {
//   console.log(res);
//   // return Promise.resolve(1);
//   return new Promise((res) => (read2 = res));
// });
// ready(444).then((res) => {
//   console.log(res);
// });
// console.log(ready);

// read2(333);

const ree = Promise.resolve(22);

ree
  .then((res) => {
    console.log(res);
    return Promise.resolve(33);
  })
  .then((res) => {
    console.log(res);
    return 44;
  })
  .then((res) => {
    console.log(res);
  });
