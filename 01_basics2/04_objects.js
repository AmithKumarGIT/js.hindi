//const tinderuser = new Object()
const tinderUser ={}

tinderUser.id ="amit1234"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = "false"

//console.log(tinderUser) 

const regularUser = {
    email: "amit77413@gmail.com",
    fullname:{
       userfullname: {
            firstname: "Amit",
            lastname: "Kumar"
       }
    }
}

//console.log(regularUser.fullname?.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2) // here {} acts as targets and  rest as source.

const obj3 = {...obj1, ...obj2}

//console.log(obj3)
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))

