function addUser(){
  let username ="amit"
  function func(){
    let lname ="vishwakarma"
    console.log(username)
  }
    //console.log(lname)//error because we call it beyond its scope 
  func()
}
//addUser()
//func() // we cannot call it 

addOne(5)//it execute 
function addOne(num){
  return num+1
}
//addOne(5) // it can be called before the function declaration 

//addTwo(5)//error 
const add = function addTwo(num){
  return num+2
}
// this is also known as expression 
// it cannot be called before declaration
function sub(){
  
}