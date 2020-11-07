function once(fn) {
  let done = false;
  return function () {
    if (!done) {
      done = true;
      console.log(this);
      return fn.apply(this, arguments);
    }
  };
}

let test = once(function (name) {
  console.log(name);
});
test(1);
