if(true){
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a)
//console.log(b)
//console.log(c)

//   Nested scope
 function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        //console.log(username)
    }
    //console.log(website)
    two()
 }

 one()

 if(true){
    const username = "amit"
    if(username === "hitest"){
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website)
 }

 //console.log(username)

 // +++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++

 console.log(addone(5))
 function addone(num){
    return num + 1
  }
  console.log(addTwo(5))
  const addTwo = function(num){
    return num + 1
  }
