let number = "33"
let number1 = Number(number)
// value ==> convertedValue
// 33 ==> 33
// "33" ==> 33
// "string" ==> NaN
// true ==> 1, false ==> 0
// undefined ==> undefined

let a = NaN;
let b = Boolean(a)
console.log(b)
// value ==> convertedValue
// 1 ==> true
// 0 ==> false
// "string" ==> true
// "" ==> false
// NaN/null/undefined ==> false


//       operators

// +,-,*,/,%,**
console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+2 + 2) // 122
console.log(1+2+"2") //32