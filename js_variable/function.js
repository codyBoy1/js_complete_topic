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
