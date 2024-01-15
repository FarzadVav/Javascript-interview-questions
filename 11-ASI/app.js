// * Find bugs in codes :)

// -----------------------

const arr = [1, 2, 3]

[("a", "b", "c")].forEach((i) => {
  console.log(i)
})

(function () {
  console.log("arr => ", arr)
})()

const userGenerator = (username) => {
  return
  {
    username
  }
}

console.log(userGenerator("farzad"))
