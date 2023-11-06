// object can be declare in two ways 1)Literals 2)Constructor
//singleton -- 

// objects literals
const mySym = Symbol("key1")

const Jsuser ={
    name: "Amit Kumar",
    "full name": "Amit Kumar singh",
    [mySym]: "mykey1", //without [] -its is a simple string but with [] - its referring to symbol mySym
    age: 28,
    email: "amit77413@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email ="amit77413@chatgpt.com" // email value is overrriden
//Object.freeze(Jsuser) //Jsuser values freezed
Jsuser.email = "amit77413@iciciss.com" //- it will not propagate since jsuser value is freezed. 
//console.log(Jsuser)

Jsuser.greetings = function(){
    console.log("Hello Js user")
}
Jsuser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(Jsuser.greetings())
console.log(Jsuser.greetingtwo())