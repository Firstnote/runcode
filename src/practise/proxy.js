const man = {
  name: "1",
  age: "2",
};

const proxy = new Proxy(man, {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new Error(`Property "${property}" does not exist`);
    }
  },
});

proxy.lacation;
