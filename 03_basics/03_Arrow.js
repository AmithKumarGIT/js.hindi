const user = {
    username: "Amit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
       // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Kumar"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Amit"
//     console.log(this.username)  // this does not work for function, it will give undefined
// }
// chai()

// const chai = function (){
//     let username = "Amit"
//     console.log(this.username)  // this does not work for function, it will give undefined
// }
// chai()

const chai = () => {
    let username = "Amit"
    console.log(this)  // this does not work for function, it will give undefined
}
chai()

// ++++++++++++++++++++++++++++ Arrows function +++++++++++++++++++++++++++++++

// basics syntex = 

//() => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,3))

// const addTwo = (num1, num2) => num1 + num2  //implicit return no need to add {}

const addTwo = (num1, num2) => ({username1 : "Amit"}) // to return objects

console.log(addTwo(2,3))
