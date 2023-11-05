// There are two types of memory 1)Stack (primitive) 2)Heap (Non-Primitive)

//stack give you a copy & all changes are made in copy not in original value
//Heap give you a reference & all changes are made in original value

let myYoutubename = "amitkumarlearningjs"
myYoutubename ="amitji"

let anothername = myYoutubename
anothername = "chaiaurcode"
 console.log(myYoutubename)
 console.log(anothername)

 let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "amit77413@shell.com"

 console.log(userOne.email)
 console.log(userTwo.email)

