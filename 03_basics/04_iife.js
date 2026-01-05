(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();
// chai()

( (name)=>{
    // unnamed IIFE
    console.log(`DB con ${name}`);
    
})('rahul');