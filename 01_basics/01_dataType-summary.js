// Primitive data-type 
   // 7 primitive data-type :String, Number, Boolean, null, undefined, symbol, BigInt

// Reference (Non-Primitive) data type
    // Array, Objects, Functions
    
    
    const score = 100
    const scoreValue = 100.3

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    // Below piece of code is symbol declaration

    const id = Symbol('123')
    const anotherId = Symbol('123')

    console.log(id === anotherId)

    //BigInt

    const bigNumber = 3245678765555798766677n

    //Array

    const heros = ["shaktiman", "naagraj", "doga"]

    //Objects

    let myObj = {
        name: "Amit",
        age: 28
    }

    //function

    const myFunction = function(){
        console.log("Hello world")
    }

    console.log(typeof outsideTemp)
    console.log(typeof myFunction)


