const promiseOne = new Promise(function(resolve,reject){
  setTimeout(function(){
    //console.log("async is completed ")
  },1000)
  resolve()
})
promiseOne.then(function(){
  //console.log("resolve is completed")
})

// promise without variable 
new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"amit",email:"amit@example.com",age:21})
  },1000)
}).then(function(user){
 // console.log(user)
})

const promiseTwo = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false ;
    if(error){
      resolve({username:"amit vishwakarma",email:"amit@2example.com"})
    }else{
      reject("ERROR : something went wrong")
    }
  },1000)
})

promiseTwo.then((user)=>{
  //console.log(user)
  return user.username
}).then((username)=>{console.log(username)}).catch((err)=>{
//  console.log(err)
}).finally(()=>{
  //console.log("promise is either resolved or rejected")
  })

/*
const promiseFour = new Promise(function (resolve,reject){
  setTimeout(function(){
  let error = false;
  if(error){
    resolve({username:"js",password:123})
  }else{
    reject("no data found ")
  }
    
  },1000)
})
*/

// this will show error if rejected 
/*
async function consumePromiseFour(){
  const response = await promiseFour
  console.log(response)
}
*/
/*
async function consumePromiseFour(){
 try{
 const response = await promiseFour
  console.log(response)
 }catch(err){
   console.log(err)
 }
}
consumePromiseFour()
*/

// using try and catch 
//async function getAllUser(){
 //try{
 //const response = await fetch("https://dummyjson.com/users");
 //console.log(response)
// const data = await response.json()
 //console.log(data)
 //}catch(err){
 //  console.log(err)
// }
//}
//getAllUser()


//using then and catch 
fetch("https://dummyjson.com/users")
.then((response) => {return response.json()})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})
