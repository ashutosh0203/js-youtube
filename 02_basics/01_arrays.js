//Array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr2[0]); 

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.unshift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr);

//slice,splice

console.log(" A ",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("c ",myArr);
console.log(myn2);
