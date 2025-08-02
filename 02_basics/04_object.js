// const tinderUSer = new Object()

const tinderUSer= {}
tinderUSer.id = "123abc"
tinderUSer.name = "Sammy"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer)

const regularUser={
    email: "some@gmail.com",
    fullnume: {
        userFullName:{
            firstname: "Ashu",
            lastname: "mishra",
        }
    }
}

// console.log(regularUser.fullnume.userFullName.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2= {3:"a", 4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}

console.log(obj3);

const users= [
    {
        id: 1 ,
        email: "h@gmail.com"
    },
]


users[0].email
console.log(tinderUSer);

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

console.log(tinderUSer.hasOwnProperty('isLoggedIn'));

