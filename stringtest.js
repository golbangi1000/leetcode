 let num = -123

const string1 = num.toString();

let str = 'javaa';

console.log(str.slice(3, 1));
console.log(string1[0])

console.log(str.substring(2.5,3.5))

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(str));