

function sayMyName(){
    console.log("H");
console.log("A");
console.log("P");
console.log("P");
console.log("Y");
}

// sayMyName()


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);

// }

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
    
}

const result = addTwoNumbers(3,8)

// console.log("Result: ",result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please entera user name");
//         return 
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam"){
    if(!username ){
        console.log("please entera user name");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage("lilly"));


