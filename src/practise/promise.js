// 红三秒一次，绿一秒一次，黄两秒一次
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

function light(cb, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  });
}

function step() {
  Promise.resolve()
    .then(() => {
      return light(red, 3000);
    })
    .then(() => {
      return light(yellow, 2000);
    })
    .then(() => {
      return light(green, 1000);
    })
    .finally(() => {
      return step();
    });
}

// step();
// light(red, 3000);
