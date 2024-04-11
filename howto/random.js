let ACCESS_TOKEN =""
const length = 40
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
alphabet+= 0123456789
alphabet+=  "_"
//console.log(alphabet.charAt(23))


for(let i=1 ; i<=length;i++){
const random = Math.floor(Math.random()*alphabet.length +1)
  ACCESS_TOKEN+=alphabet.charAt(random)
}

//console.log(random)
console.log(ACCESS_TOKEN)

