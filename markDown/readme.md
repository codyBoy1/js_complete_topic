# Solution Code 
### project 1
[click here](https://google.com)
``` javascript
const body =document.querySelector("body")
    const buttons=document.querySelectorAll("span")
    //console.log(buttons)
    buttons.forEach(function(button){
      //console.log(button)
      button.addEventListener("click",(e)=>{
        //console.log(e)
        //console.log(e.target)
        if(e.target.id==="red"){
          body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="green"){
          body.style.backgroundColor=e.target.id
        }
      })
    })
```