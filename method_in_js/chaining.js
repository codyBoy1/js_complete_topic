const number =[1,2,3,4,5,6,7,8,9,10]
const newNum =number.map((num) => num*10).map((num) => num+1).filter((num) =>num>30)
//console.log(newNum)

//******array.reduce()********************

const myNum =[1,2,3,4,5]
//const initialVal =0 
const totalNum=myNum.reduce(function (acc,cval){
  return acc+cval
},0)

console.log(totalNum)

