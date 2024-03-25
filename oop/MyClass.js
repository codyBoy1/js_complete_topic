//const addOne = (num) => ( num+1)
//console.log(addOne(5))

/*
class User {
  constructor(username,email,password){
  this.username = username
  this.email = email
  this.password = password
  }
  encryptPassword(){
    return `${this.password}abcd`
  }
}

const chai = new User("amit","amit@gmail.com","1234")
 console.log(chai.encryptPassword())
 
 */
 
 
 // it can also be done by following method 
 
 function User(username,email,password){
   this.username = username
  this.email = email
  this.password = password
 }
 User.prototype.encryptPassword = function(){
   return `${this.password}abcd`
 }

 
const chai = new User("amit","amit@gmail.com","1234")
console.log(chai.encryptPassword())