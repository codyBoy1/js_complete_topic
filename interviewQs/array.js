Array.prototype.newVal ="amit vishwakarma"
const arr =[1,2,3,4]

for(let v in arr){
  if(arr.hasOwnProperty(v)){
  console.log(v)
  }
}