function sayMyName(){
    console.log("A");
    console.log("s");
    console.log("h");
    console.log("u");
}

// sayMyName()

// function addTwoNos(number1,number2){
//     console.log(number1 + number2);
// }

// addTwoNos(3,4);

function addTwoNos(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNos(3,4);

// console.log("Result:", result);

function loginUserMessage ( username = "sam"){

    if(username === undefined){                 // !username is equal
        console.log("Pleae enter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashu"));

function calculateCartPrice(val1,val2,...num1){
    return num1

}

// console.log(calculateCartPrice(200,300,400,500));

const user = {
    username: "ashu",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200,300,400,100]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,2000]));
