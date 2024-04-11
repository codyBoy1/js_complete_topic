const str = "AMIT vishwakarma"
const vowels =["a","e","i","o","u"]

const strArr =str.toLowerCase().split("")
let count =0

strArr.forEach((ch)=>{
  
  const boolVal = vowels.includes(ch)
  if(boolVal){
    count=count+1
  }
return count
  //console.log(boolVal)
})

console.log(count)
//console.log(strArr)

// 2nd method 

const strArr2 = Array.from(str)
//console.log(strArr2)

// Best way to do it 
function calculateVowel(data){
  let count =0 
  data.toLowerCase().split("").forEach((ch)=>{
     vowels.includes(ch) && count++
  })
    return count
}

const vowelChar = calculateVowel(str)
console.log(vowelChar)