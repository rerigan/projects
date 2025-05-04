const valores = [2,3,6,9]
const users = [
    {name: "Luciano", age: 45},
    {name: "Pedro", age: 40},
    {name: "Lucas", age:30},
]
const valoresDobrados = valores.map(valor => valor * 2)
const userNames = users.map(user => user.name)

console.log (userNames)
console.log (valoresDobrados)