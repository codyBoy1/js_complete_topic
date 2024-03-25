/*
class User {
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`username is ${this.username}`)
  }
  
  createId(){
    return "123"
  }
}

const amit = new User("amit")
amit.logMe()
console.log(amit.createId())

*/
// here we can access createId()
// but if we use static we can't use it 


class User {
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`username is ${this.username}`)
  }
  
 static  createId(){
    return "123"
  }
}

const amit = new User("amit")
//amit.logMe()
//console.log(amit.createId())