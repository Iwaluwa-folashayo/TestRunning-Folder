

// var text = "outside"
// function logtext(){
//     console.log(text);
//     var text = "inside"
// }
// logtext();

let text = "outside"
function logtext(){
    
console.log(text);
// let text = "inside"
}
logtext();


//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible