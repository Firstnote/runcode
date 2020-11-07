console.log("A");

setTimeout(() => console.log("B"), 1000);

const start = new Date();
while (new Date() - start < 3000) {}
console.log("C");

setTimeout(() => console.log("D"), 0);

new Promise((res, rej) => {
  console.log("E");
  foo.bar(100);
})
  .then(() => console.log("F"))
  .then(() => console.log("G"))
  .catch(() => console.log("H"));

console.log("I");
