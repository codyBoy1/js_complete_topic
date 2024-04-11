//const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descriptor)
//console.log(Math.PI)
//console.log(Object.keys(Math))


const chai ={
  name :"chai",
  price : 24,
  isPresent : true,
  order : function(){
    console.log('chai is order')
  }
}

//console.log(chai)
//console.log(Object.getOwnPropertyDescriptor(chai,"name"))


/*
Object.defineProperty(chai,"name",{
  writable : false,
  enumerable : false
})
*/

//console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key, value] of Object.entries(chai)){
  if(typeof value !=='function'){
    
  //console.log(`${key}:${value}`)
  }
}