const myArray = [1, 2, 3, 4, 5]
const myHeros = ["ajay", "aamir"]
const myArray2 = new Array(1,2,3,4,5)
//console.log(myArray[1])
//array methods

//myArray.push(6)
//myArray.push(7)
//myArray.pop()
//myArray.unshift(9)
//myArray.shift(5)
//console.log(myArray)
//console.log(myArray.includes(9))
//console.log(myArray.indexOf(19)) // -1
const newArr = myArray.join()
//console.log(myArray)
//console.log(newArr)
//console.log(typeof newArr)


//slice,splice
console.log("A", myArray)
const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B", myArray)

const myn2 = myArray.splice(1,3) /*manipulate the original array i.e
it wipe out the 2 & 3 from original array*/
console.log("c", myArray)
console.log(myn2)