let func = async () => {
  let a = 1;
  a++;
  return new Error(4);
};
func()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
