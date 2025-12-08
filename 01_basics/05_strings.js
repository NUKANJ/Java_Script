const name = "hitest"
const repoCount = 50

// console.log(name+repoCount+"Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rahul-hc-hoc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringone = "  rahul  "
console.log(newStringone);
console.log(newStringone.trim(' '));

const url = "https://www.youtube.com/foz%20Funlo&list="

console.log(
url.replace('%20',"-")
);
 
console.log(url.includes('Fun'));

console.log(gameName.split('-'));




