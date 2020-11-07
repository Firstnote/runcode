function test(promises) {
	return new Promise((resolve, reject) => {
    function resolver(value) {
			resolve(value)
		}

		function rejecter(reason) {
			reject(reason)
		}
		for (let i = 0; i < promises.length; i++) {
		 promises[i].then(resolve, reject);
		}
	});
}
let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("p1");
	}, 3000);
});
let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("p2");
	}, 2000);
});
console.time("cost");
test([p1, p2]).then((data) => {
	console.log(data);
	console.timeEnd("cost");
});
