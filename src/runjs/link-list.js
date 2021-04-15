// 链表
const newFiber = {
  b: 1,
};
const fiber = {
  a: 1,
};
const hook = {
  c: 1,
};

var workInProgress = fiber; //workInProgress指针指向fiber

workInProgress.next = newFiber; //为链表下一个元素赋值

workInProgress = newFiber; //workInProgress指针移动到链表下一个元素

workInProgress = workInProgress.next = hook; //上面操作的简化，为当前链表元素的next赋值，并将workInProgress的指针移动到下一个元素

console.log(fiber);
console.log(fiber.next);
console.log(fiber.next.next);
console.log(fiber.next.next.next);
