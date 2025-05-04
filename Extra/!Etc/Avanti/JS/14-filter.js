const valores = [2, 3, 6, 9]
const users = [
    { name: "Luciano", age: 45 },
    { name: "Pedro", age: 15 },
    { name: "Lucas", age: 30 },
]

const numerosMaior5 = valores.filter(num => num >= 5)
const numerosPares = valores.filter(num => num % 2 === 0)
const menoresIdade = users.filter (user => user.age <18)
console.log (menoresIdade)
console.log (numerosMaior5)
console.log (numerosPares)