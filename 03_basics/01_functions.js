

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
// console.log(loginUserMessage("lilly"));

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2,500,400,5000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"Santosh",
    price: 89
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,100,600]));



