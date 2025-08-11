// Immediate Invoked Function Expression (IIFE)

//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
}) ();


//simple IIFE
((name) =>  {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('hitesh')