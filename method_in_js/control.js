const month =3
switch(month){
  case 1:console.log("January")
    break;
  case 2:console.log("february")
    break ;
  default :console.log("march")
}

// falsy value : false 0 ,-0 ,bigint:0n:null,"",undefined,NaN
// except this all value are true 

// truthy value 
//'0','false'," ",[],{},function(){}

// how to check array is empty 

const arr =[]
if(arr.length==0){
 // console.log("arr is empty")
}

// how to check if object is empty
const emptyObj ={}
if(Object.keys(emptyObj).length==0){
  console.log("object is empty")
}

// nullish coalespicng operater (??)
let a ;
//a=12 ?? 23 
//a=null ?? 10
a =undefined ?? 30

//it doesn't print null or undefined value 
console.log(a) ;

// ternary operator 

//condition ? true : false 

(3>2) ? console.log("greater") : console.log("less ") ;