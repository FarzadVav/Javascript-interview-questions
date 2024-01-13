const sum = (num1, num2 = 5) => {
  return num1 + num2
}

const a = sum(10, null)
const b = sum(10, undefined)

console.log("a =>", a);
console.log("b =>", b);