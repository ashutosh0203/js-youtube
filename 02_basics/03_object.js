// Singleton

//object literals

const mySyn=Symbol("key1")

const Jsuser = {
    name: "AShutosh",
    "full name": "Ashutosh Mishra",
    [mySyn]: "mykey1",
    Age:18,
    location: "Kanpur",
    email: "ashutosh@iiitk.ac.in",
    isLoggedIn: false,
    lastLogoinDays: ["Monday","Saturday" ]

}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySyn]);

Jsuser.email = "Ashu@gpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "Ashu@microsoft.com"

// console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(Jsuser.greetings());
console.log(Jsuser.greetingTwo());
