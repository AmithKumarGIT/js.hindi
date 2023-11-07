//console.log("A")
// console.log("M")
// console.log("I")
// console.log("T")

function sayMyName(){
    console.log("A")
    console.log("M")
    console.log("I")
    console.log("T")
}

//sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }

// function addTwoNumber(number1, number2){
//     // let result = number1+number2
//     // return result
//     return number1+number2
// }
// const result  = addTwoNumber(3,4)
//  console.log(result)

function loginUserMessage(username){
    if(username === undefined){  // or if(!username)
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Amit"))
console.log(loginUserMessage())