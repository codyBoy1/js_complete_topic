//console.log("this is array tutorial")
const myArr=[1,2,3,4,5,6];
//const myArr1=["amit","ram","ramu","salman"]
//const myArr2 = new Array(12,23,345,9)
//console.log(myArr[0])
//console.log(myArr1[0])
//console.log(myArr2[0])

// Array Method 
myArr.push(7)// enter value in array
myArr.push(8)
myArr.pop()//delete last value of array
//console.log(myArr)

//console.log(myArr.includes(10));
//console.log(myArr.indexOf(1));//res -1 if not found 

const newArr=myArr.join();//it convert array into string 
//console.log(typeof newArr)

// slice and splice 
//console.log("A",myArr)
//const myn1 =myArr.slice(1,3)
//console.log(myn1)
//console.log(myArr)
// slice does not change original array 

//console.log("B",myArr)
//const myn2 =myArr.splice(1,3)
//console.log(myn2)
//console.log(myArr)
//splice change original array

const kgf_hero=["yash","adhira","rocky"]
const f_hero=["batman","ironman"]
//const all_hero=kgf_hero.concat(f_hero);

// 1st method 
//console.log(all_hero)//to join 2 array

//2nd method 
//this spread method 
const all_hero=[...kgf_hero,...f_hero]
//console.log(all_hero)


// to convert array inside array in single array 
const other_array=[1,[2,3,4],5,[6,7,[8,9]]]
const real_array=other_array.flat(Infinity)
//console.log(real_array)

// to check if array or not 

//console.log(Array.isArray("amit"))

//to convert into array 
// console.log(Array.from("amit"))

// to convert set of data into array
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))
console.log(Array.of("score1",score2,score3))
