function fn() {
  var a = 10

  return a
}

if (fn()) {
  var b = 20
  let c = b
  c++
}

console.log("typeof a, b, c =>", typeof a, typeof b, typeof c)
