const user ={
  username :"amit",
  userEmail:"amit@example.com",
  userPassword :1234,
  getAllUser : function (){
    console.log("this is a function")
    console.log(this.username)
   
  }
}

//console.log(user.username)
//console.log(user.getAllUser())

function User(username,loginCount,isLoggedIn){
  this.username=username
  this.loginCount=loginCount
  this.isLoggedIn=isLoggedIn
  //return this 
}
//const userOne =User("amit",10,true)
//const userTwo =User("amit vishwakarma",11,false)
// this will overwrite value of userOne 
// so to get rid of this use new keyword

//console.log(userOne)


//const userOne = new User("amit",10,true)
const userTwo =new User("amit vishwakarma",11,false)
//console.log(userOne)
//console.log(userTwo)


//console.log(userTwo.constructor)
