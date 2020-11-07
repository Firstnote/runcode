const Vue = {};
Object.defineProperty(Vue, "name", {
  get() {
    return 123;
  },
});
Vue.newName = 123;
console.log(Vue);
