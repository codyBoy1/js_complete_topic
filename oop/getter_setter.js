class User {
  constructor(email,password){
    this.email = email
    this.password = password
  }
  get password(){
   return `${this._password}pass`
  }
  set password(value){
    this._password = value
  }
}

const amit = new User("amit@li.com",123)
console.log(amit.password)