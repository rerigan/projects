const valores = [2, 3, 6, 9]
const products = [
    { name: "Cadeira", price: 150 },
    { name: "Mesa", price: 400 },
    { name: "Lâmpada", price: 15 },
]

const somaTotal = valores.reduce((acc, val) => acc + val, 0)
const somaTotalProducts = products.reduce((acc, val) => acc + val.price, 0)
console.log (somaTotalProducts)