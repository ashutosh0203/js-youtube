// var c =300
let a=300 //global scope

if(true){
    let a=10  // block scope
    const b = 20
    var c = 30
}

 

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = " Ashu"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}

// one()

if(true){
    const username = "Ashu"
    if(username === "Ashu"){
        const website = "  youtube"
        //console.log(username + website);

    }
    // console.log(website);
}
// console.log(username);


//++++++++++++++ important ++++++++++++++++

// this below thing is hoisting

console.log(addone(5));

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
