class Fiber {
  constructor(name, childFiber, siblingFiber, returnFiber) {
    this.name = name;
    this.childFiber = childFiber;
    this.siblingFiber = siblingFiber;
    this.returnFiber = returnFiber;
  }
}

class Component {
  constructor(name) {
    this.name = name;
  }
}

const c1 = new Component("c1");
const c2 = new Component("c2");
const c3 = new Component("c3");
const b1 = new Component("b1");
const b2 = new Component("b2");
const a1 = new Component("a1");
const root = new Component("root");

root.children = [a1];
a1.children = [b1, b2];
b1.children = [c1, c2, c3];

// console.log(root);

function creatFiber(rootFiber) {
  let workInProgress = rootFiber;
  while (
    // 判断条件：如果当前指针有子节点或者当前指针的returnFiber存在，则执行循环
    (workInProgress.children && workInProgress.children.length) ||
    workInProgress.returnFiber
  ) {
    if (workInProgress.children && workInProgress.children.length) {
      // 如果有子节点，为当前指针的childFiber赋值第一个子节点，并将指针移动到childFiber
      workInProgress.childFiber = workInProgress.children.shift();
      workInProgress.childFiber.returnFiber = workInProgress;
      workInProgress = workInProgress.childFiber; //指针移动到子fiber
    } else if (
      workInProgress.returnFiber.children &&
      workInProgress.returnFiber.children.length
    ) {
      // 如果没有子节点，但有兄弟节点，则为当前指针的siblingFiber赋值第一个兄弟节点
      workInProgress.siblingFiber = workInProgress.returnFiber.children.shift();
      workInProgress.siblingFiber.returnFiber = workInProgress.returnFiber;
      workInProgress = workInProgress.siblingFiber;
    } else {
      // 如果既没有子节点，且没有兄弟节点，但有父节点，则将指针移动到父节点Fiber
      workInProgress = workInProgress.returnFiber;
    }
  }
  return workInProgress;
}
const fiber = creatFiber(root);

console.log(fiber);
// const root = {
//   name: "root",
//   children: [
//     {
//       name: "a1",
//       children: [
//         {
//           name: "b1",
//           children: [
//             {
//               name: "c1",
//               children: [],
//             },
//             {
//               name: "c2",
//               children: [],
//             },
//             {
//               name: "c3",
//               children: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "a2",
//       children: [],
//     },
//   ],
// };

// console.log(creatFiber(root));
