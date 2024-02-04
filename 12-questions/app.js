// Q1 -------- 1. Fixed bug & 2. What is console result
var value = 18
var result = 34
(function () {
  result = value
  var value = 90
})()
// console.log(result)

// Q2 ------------------
var foo = (function () {
  var foo = 2
})()
// console.log(foo)

// Q3 ------
var app = {}
;(function (param) {
  // console.log(param === app)
})(app)

// Q4 --------
;(function () {
  var a = 5
})()
// console.log(a)

// Q5 ---------
;-(function () {
  // console.log('FarzadVav')
})()

// Q6 ------
var app = {}
;(function (param) {
  param.name = "FarzadVav"
})(app)
// console.log(app.name)
