//***********for each don't return value *** so we use filter()
// we can't store for each in a variable 

const myNums =[1,2,3,4,5,6,7,8,9]

//const newNum = myNums.filter((num)=>num>3)
//const newNum = myNums.filter((num)=>(num>3))//if we use () don't write return 
const newNum = myNums.filter((num)=>{return num>3})// if we use {} we have to write return 
//console.log(newNum)

//******filter example****************
const books =[
 {
  title:"book1" , genre:"maths",publish:2000,edition:2014
 } ,
 {
  title:"book2" , genre:"chemistry",publish:2010,edition:2018
 },
 {
  title:"book3" , genre:"physics",publish:1960,edition:2014
 },
 {
  title:"book4" , genre:"maths",publish:2008,edition:2020
 },
 {
  title:"book5" , genre:"maths",publish:2017,edition:2024
 }
  ]
  
  let userBook =books.filter((bk)=>{
    return bk.genre==="maths"
  })
  console.log(userBook)