//Primitive 

// 7types: String,Number,boolean, Null, undefined , Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId= Symbol("123")

console.log(id === anotherId);

const bigNumber = 23442543626262n


// Reference (Non primitive)

//Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]


let myObj={
    name: "Ashu",
    age:22,
}

const myFunction= function(){
    console.log("Hello world");
}

console.log( typeof scoreValue);


//+++++++++++++++++++++++++++++++++++++++++++++++++

//two type of memory Stack and heap

//Stack(Primitive), Heap(Non-Primitive)

let myYtName = "Ashu"

let anothername = myYtName
anothername = "chaiaurcode"

console.log(myYtName);
console.log(anothername);

let userOne={
    email: "user@goole.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email="ashu@google.com"

console.log(userOne.email);
console.log(userTwo.email);