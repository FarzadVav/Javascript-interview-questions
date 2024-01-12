const func = (obj) => {
  obj.name = null
}

const obj = {
  name: "farzad",
}

func(obj)

console.log(obj.name) // obj === ?
