// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
    
}


// maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")  // it takes only unique values and only prints in the order it is defined

console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
}


// iteration though objects doesnt happen through forof
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
    
    
// }

