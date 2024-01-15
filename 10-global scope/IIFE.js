;(function () {
  var a = (b = 10)
  // * Describe code
  // b = 10
  // var a = b

  console.log('typeof "a" in this scope =>', typeof a)
  console.log('typeof "b" in this scope =>', typeof b)
})()

console.log('typeof "a" in global scope =>', typeof a)
console.log('typeof "b" in global scope =>', typeof b)