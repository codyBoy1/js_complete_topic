const today =new Date()
//console.log(typeof today)//object
//console.log(today)

const day =today.getDay()
//console.log(day)
//console.log(typeof day)//number
const dayList =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log("Today is "+dayList[day])



var hour =today.getHours()
//console.log(hour)
//console.log(typeof hour)//number
/*
const prepand =(hour>=12) ? "PM" : "AM"
hour =(hour>=12) ? hour-12 : hour
*/


const minute =today.getMinutes()
//console.log(minute)
//console.log(typeof minute)//number


const second =today.getSeconds()
//console.log(second)
//console.log(typeof second)//number

setInterval(function (){
  let date = new Date()
console.log(date.toLocaleTimeString())
},1000)