var User = {
  count: 1,
  action: {
    count: 2,
    getc() {
      return this.count;
    },
  },
};
var getc = User.action.getc;
setTimeout(() => {
  console.log(1, User.action.getc());
});
console.log(2, getc());
