let a = 1000

if (true){
    let a = 10
const b=20
var c= 30
// console.log("inner:",a);
}

// console.log(a);


function one() {
    const username  = "HITESH"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
}

one()

if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username+website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++++++ interesting +++++++++++

function addone(num){
    return num+1
}

console.log(addone(5));
 

const addTwo = function(num){
    return num+2
}
console.log(addTwo(8));