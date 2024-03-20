//console.log(NEGATIVE_INFINITY)
//console.log("hi my name is \ amit vishwakarma")
//document.write("hi my name is \ amit vishwakarma")
// use \ for line break 

//how to delete in js 
const obj ={
  name:"amit",
  age:21,
  salary:4000
}
//console.log(delete obj.salary)
//console.log(obj)

let myObj={
  name :"amit vishwakarma",
}
Object.defineProperty(myObj, 'age', { 
    value: 30, 
    configurable: false // Making 'age' property non-configurable 
}); 
  //console.log(myObj.age)
//console.log(myObj); // { name: 'John', age: 30 } 
  
// Attempt to delete the non-configurable property 'age' 
let result = delete myObj.age; 
//console.log(result); // false, deletion fails 
  
//console.log(myObj);

const arr =[1,23,3]
//console.log(delete arr[0])
//console.log(arr)

const geek ={
  age :"twenty"
}
Object.defineProperty(geek ,'name',{
  value:"amit",
  writable:false
})
//console.log(geek.name)
//console.log(Object.entries(geek)[0])


// ********* check leap year ***********

function leap(year){
  if(year%4===0){
    console.log("is a leap year")
  }else{
    console.log('year is not leap year')
    
  }
}
leap(2032)

//alert(document.URL)//get url 