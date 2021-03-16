async function name() {
  let na = new Promise((resolve) => {
    setTimeout(() => {
      throw new Error("123");
    }, 1000);
  });
  console.log(na);
}

name();
