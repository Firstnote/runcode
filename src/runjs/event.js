setTimeout(() => {
  console.log("A");
}, 0);

setTimeout(() => {
  console.log("B");
}, 1000);

(function foo() {
  console.log("top");

  Promise.resolve()
    .then(() => {
      setTimeout(() => {
        console.log("C");
      }, 0);
      setTimeout(() => {
        console.log("D");
      }, 1000);
      console.log("E");
      Promise.resolve().then(() => {
        console.log("F");
      });
    })
    .then(() => console.log("G"));
})();

console.log("mid");

setTimeout(() => {
  console.log("H");
}, 0);

setTimeout(() => {
  console.log("I");
}, 1000);

// EFGAHCBID
