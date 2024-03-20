// for of loop 

let arr =[1,2,3,4,5,6,7,8,9,10]

/*
for(const Iterator of Object){
// iterator can any name and object is upon which it is applied   
}
*/

for(const num of arr){
 // console.log(num)
}

//************Map************************
const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America ")
map.set('Fr',"France")

//console.log(map)

// for of loop on map 
for(const key of map){
  //console.log(key)
  // it print each key value as separate array 
}

for(const [key , value] of map){
  //console.log(key,value)
  // it print as string 
}

//************(for of )doesn't work with object *************************

const myObj ={
  js:"javascript",
  py:"python",
  cpp:"c++",
  log:"error file"
}

for(const key in myObj){
  //console.log(`${key} is extention of ${myObj[key]}`)
}

const programming =["js","py","cpp","h","log","git"]
for(const key in programming){
 // console.log(key)// print key
 //console.log(programming[key])
}

//************for each*****************


const codinglan =["js","py","cpp","h","log","git"]

/*
codinglan.forEach(function (item){
  console.log(item)
})
*/
codinglan.forEach(printit)


// forEach print item , index and arr also
codinglan.forEach((item,index,arr)=>{
  //console.log(item,index,arr)
})
function printit(item){
 // console.log(item)
}


const codeObj =[
  {
 langName:"java",
 ext:"java"
  },
  {
 langName:"python",
 ext:"py"
  },
  {
 langName:"javascript" ,
 ext:"js"
  }
  ]
  codeObj.forEach((item)=>{
   // console.log(item.langName)
  })