function multiplyBy5(num){
  return num*5
}

multiplyBy5.Name ="amit"
//console.log(multiplyBy5(6))
//console.log(multiplyBy5.Name)
//console.log(multiplyBy5.prototype)

//function can also be treated as object

function createUser(username,score){
  this.username = username
  this.score = score
}

createUser.prototype.increament = function(){
  this.score++
}

createUser.prototype.printMe =function(){
  console.log(`price is ${this.score} and username is ${this.username}`)
}

const chai = new  createUser("chai",25)
//const tea = new createUser("tea",250)

chai.printMe()
console.log(chai)