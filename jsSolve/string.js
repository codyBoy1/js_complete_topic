const str = "amit vishwakarma"
let len = str.length
  let revStr =""
  while(len>=0){
  const char = str.charAt(len)
  revStr+=char
  len--
}
//console.log(revStr)

// 2nd method 
const revstr = (str)=>{
  return [...str]//convert string into array
  //.reverse()//reverse element of array
  //.join('')// convert array into string
}

//console.log(revstr("amit"))
