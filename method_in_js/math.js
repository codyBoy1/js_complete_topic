//console.log(Math.pow(2,3))
//console.log(Math.sqrt(4))
//console.log(Math.cbrt(8))

const side1 =3
const side2 =4
const side3 =5
const perimeter = side1 + side2 + side3 
const s = perimeter/2
const value =s*(s-side1)*(s-side2)*(s-side3)
const areaTriangle =Math.sqrt(value)
console.log(areaTriangle)
