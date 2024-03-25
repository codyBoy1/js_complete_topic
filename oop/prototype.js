let myName = "Amit   "
//console.log(myName.length)

let myHeroes = ["thor","spiderman"]

let heroPower ={
  thor :"hammer",
  spiderman : "sling",
  getSpiderPower : function (){
    console.log(`spider power is ${this.spiderman}`)
  }
}

//we can add our own function in all object , string , array by using prototype

// or only in any user undefined object , function , array , string also 


Object.prototype.amit =function (){
  console.log("amit function is added in all object ")
}
//heroPower.getSpiderPower()
//heroPower.amit()//this is not avialable

// as array , function , string  can access method of object also 

//myHeroes.amit()

String.prototype.trueLength = function(){
 // console.log(this)
  console.log(`${this.trim().length}`)
}

//myName.trueLength()
//"vishwakarma".trueLength()

const name ={
  name :"amit vishwakarma"
}

const stDetail ={
  email:"amit@google.com",
  callEmail:function (){
    console.log(`user email is ${this.email}`)
  },
  __proto__:name
}
console.log(stDetail)