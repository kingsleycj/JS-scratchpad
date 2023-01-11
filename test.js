// let res1 = new RegExp("abc");
// let res2 = /abc/.test("abc");

// console.log(res2);

// class 2:
// a test for a pattern that starts with a digit
// let res3 = /\d./.test('abcdef')
// console.log(res3);
const set1 = /\d{5, 8}/.test("323"); // looks out for a pattern that has a minimum of 5 and maximum of 8 digits in the quoted braces
console.log(set1)
