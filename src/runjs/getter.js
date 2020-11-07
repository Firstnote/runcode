const name = {
  firstname: "z",
  lastname: "l",
  get fullname() {
    return this.firstname + this.lastname;
  },
};
console.log(name.fullname);
