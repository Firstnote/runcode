const date = "2020-08-07";

const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// 括号为组，?<year>为具名
const res = reg.exec(date);

console.log(res);

//环视
const intro = "张三是张三，张三丰是张三丰";

console.log(intro.replace(/张三/g, "李四"));

//向后断言
//向后否定
console.log(intro.replace(/张三(?!丰)/g, "李四"), "fou");
//向后肯定
console.log(intro.replace(/张三(?=丰)/g, "李四"));

//向前断言
const str = "A00-B00";
//向前否定
console.log(str.replace(/(?<!A)00/g, "11"));
//向前肯定
console.log(str.replace(/(?<=A)00/g, "11"));
