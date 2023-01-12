// let res1 = new RegExp("abc");
// let res2 = /abc/.test("abc");

// console.log(res2);

// class 2:
// a test for a pattern that starts with a digit
// let res3 = /\d./.test('abcdef')
// console.log(res3);

// quantifiers +,  *,  ?
const set1 = /\d[5, 8]/.test("1234");    // looks out for a pattern that has a minimum of 5 and maximum of 8 digits in the quoted braces
// console.log(set1)

// REPEATING PATTERNS
// + quantifiers
const set2 = /^\d\S+@\S+\.?\S+$/.test("1king@gmail.com") // looks for a string literal, then "@", then another string literal, then a dot "."(optional), then another string literal
console.log(set2)


/**
 * ?             \s - represents "whitespaces"
 * !             \S - represents "none whitespaces"
 * ?             ^ - represents "start a pattern with"
 *  *             $ - represents "end a pattern with"
 * TODO     .   - represents "any other value"
 * */ 


// A STANDARD EMAIL REGEX VALIDATION
const emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.exec("primekings.kc@gmail.com") ;
    console.log(emailValidation)

// MATCHES AND GROUPS
const match = /^\S+.\d+$/.test("a 100")
console.log(match)