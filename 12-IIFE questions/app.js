// Q1 -------- 1. Fixed bug & 2. What is console result
var value = 70
var result = 789
(function () {
  result = value
  var value = 77
})()
// console.log(result)

// Q2 ------------------
var fn = (function () {
  var fn = 7
})()
// console.log(fn)

// Q3 ------
var app = {}
;(function (p) {
  // console.log(p === app)
})(app)

// Q4 --------
;(function () {
  var val = 70
})()
// console.log(val)

// Q5 ---------
;-(function () {
  // console.log('FarzadVav')
})()

// Q6 ------
var app = {}
;(function (p) {
  p.name = "FarzadVav"
})(app)
// console.log(app.name)
