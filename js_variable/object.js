//object literals 
const mySym=Symbol("key1")
//console.log(typeof mySym)
const jsUser ={
  name:"amit",
  "full name":"amit vishwakarma",//this value can't be access by jsUser.()
  age:21,
  //mySym:"mkey1",//this is wrong way of initiolizing Symbol
  [mySym]:"mkey1",
  location:"basti",
  isMale:true,
  email:"amit@gmail.com"
}
//console.log(jsUser.name)
//console.log(jsUser["email"])//best way to access object 
//console.log(jsUser["full name"])
/*
console.log(jsUser.mySym)
console.log(typeof jsUser.mySym)
// wrong way of printing Symbol
*/
//console.log(jsUser[mySym])
//console.log(typeof jsUser[mySym])
// to freeze object after this we cannot change value 
Object.freeze(jsUser)

//console.log(jsUser)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//1st method to combine object using assign()
//const obj3=Object.assign({},obj1,obj2);

//2nd method to join object by spread method 
const obj3 ={...obj1,...obj2}
//console.log(obj3)

// to print all key or value of object 

//console.log(Object.keys(obj3))
// data type of above expre is array

// similarly for values 
//console.log(Object.values(obj3))


//console.log(Object.entries(obj3))
//console.log(obj3.hasOwnProperty("1"))
//console.log([])//return true 
//console.log([]==false)


// object de structuring 

const myObj ={
  name :"amit vishwakarma",
  age:21
}

// method how to destructure 
const {age}=myObj

// console.log(age)
// it can also be called as 

const {age:amitAge}=myObj
console.log(amitAge)