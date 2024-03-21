function textMsg(name){
  return `my name is Mr. ${name}`
}
//console.log(textMsg("amit vishwakarma"))
function addNum(...num1){
  return num1
}
addNum(200,230,600);


// **************IIFE****************
//****‡*******Immediately Invoked Function Expression **********


(function print(){
  console.log("what you want to print")
})();
(()=>{
  console.log("fat arrow function")
})()


function isPass(){
  console.log("Inside is pass")
  return "pass"
}

function isTopper(){
  console.log("inside is topper")
  return "topper"
}

//value of msg is topper because 1st //function is true and 2 is also true//then it will print 2 function value .
// if 1st one is false it will not print any value 
const msg = isPass() && isTopper()
console.log(`msg = ${msg}`)