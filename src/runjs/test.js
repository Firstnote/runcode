var test= function (promises) {
	if (!Array.isArray(promises)) {
		throw new TypeError('You must pass array')
	}
	return new Promise(function (resolve, reject) {
		function resolver(value) {
			resolve(value)
		}

		function rejecter(reason) {
			reject(reason)
		}
		for (var i = 0; i < promises.length; i++) {
			promises[i].then(resolver, rejecter)
		}
	})
}
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 1000);
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2')
  }, 2000);
})
console.time('cost')
test([p1, p2]).then(data => {
  console.log(data);
  console.timeEnd('cost')
})