const score ="33";

let valueInStr =Number(score)
//console.log(valueInStr)
//console.log(typeof valueInStr)
/*
data        value    type 
"33"=>      33       Number
"33ab"      NaN      Number
true        1        Number
false       0        Number
null        0        Number 
undefined   NaN      Number
*/


const value =null

//let valueStr = String(value)
//console.log(valueStr)
//console.log(typeof valueStr)

/*
data        value       type 
"amit"      amit        string 
"22"        22          string 



*/

const num =undefined ;

let valueBool = Boolean(num)
//console.log(valueBool)
//console.log(typeof valueBool)

/*
data        value      type 
any num 
except 0    true       Boolean
"12"        true       Boolean
"amit"      true       Boolean
""          false      Boolean
null        false      Boolean
undefined   false      Boolean

*/


/**************OPERATION**************/
const num1 = 33
let negNum =-num1
//console.log(negNum)
//console.log("1"+2)
//console.log(1+"2")
//console.log("1"+"2")
const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1)) +min)