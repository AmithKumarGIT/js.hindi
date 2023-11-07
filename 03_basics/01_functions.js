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

// console.log(loginUserMessage("Amit"))
// console.log(loginUserMessage())

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2))
// Ans -2

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,400))

// Ans - [200, 300, 400]

// function calculateCartPrice(val1,val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,400,2000))

//ans - [400, 200]

const user = {
    username: "Amit",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username: "Amit",
    price: 399
})

const myNewArray = [200, 300, 400]

function returnSecondvalue(getarray){
    return getarray[1]
}

//console.log(returnSecondvalue(myNewArray))

console.log(returnSecondvalue([100, 200, 300]))
