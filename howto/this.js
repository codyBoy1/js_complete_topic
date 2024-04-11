//console.log(this)

function say(){
//console.log(this)
console.log(`my name is ${this.name}`)
}
//say()
const person ={
  name :"amit",
  age : 21,
  sayHello : say
}
//say()
//person.sayHello()
//console.log(person.sayHello)

//const hi = say.call(person)
//console.log(typeof hi)


class foo {
  constructor(name){
    this.name = name 
  }
  getNameSeparator(){
    return "-"
  }
}

class foobar extends foo {
  constructor(name , index){
     super(name)
    this.index = index 
  }
  
  getFullName (){
    return `full name is ${this.name} and super.getNameSeparator() ${this.index}`
  }
}


//const first = new foobar("amit",2)
//console.log(first.name)


function printName(name){
 console.log(name)
}

//printName("amit___")
/*
const sayHi = ()=>{
  console.log(`my name is ${this.name}`)
  console.log(this)
}
*/
const sayHi=  function (){
  console.log(`my name is ${this.name}`)
 // console.log(this)
}
//sayHi()

const nameAm = {
  name :"amit vishwakarma",
  sayOne : sayHi
}

//nameAm.sayOne()

sayHi.call(nameAm)