class User{
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`username is ${this.username}`)
  }
}

class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email=email
    this.password = password
  }
  addCourse(){
    console.log(`course is added by ${this.username}`)
  }
}

const chai = new Teacher("chai","chai@yt.com",123)
chai.addCourse()
console.log(chai)

console.log(Teacher instanceof User)