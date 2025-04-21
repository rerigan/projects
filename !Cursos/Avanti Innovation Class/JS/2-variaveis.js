// Variável - armazenar uma informação na memória pra recuperar durante o programa/script
// var name = "Luciano"
// var name = "João"
// Isso não é o ideal, quando se trabalha com JS puro, há 2 tipos de variáveis diferentes, LET
// let name = "Luciano"
// name = 31
// O ideal é usar a variável const, não aceita alteração de valor
const name = "Luciano"
const lastName = "Rocha"
// Number, não precisa de aspas. Permite cálculo de dados
const idade = 40
const valor1 = 2.10
const valor2 = 3.20
// Boolean, valor binário, permite true e false
const isLogin = true
// Array é uma lista com vetores
const frutas = ["banana", "maçã", "mamão", 20]
const usuario = {
    name: "Luciano",
    lastName: "Rocha",
    idade: 42,
}

const vazio = null

console.log(typeof usuario)
// console.log (usuario)
// console.log (frutas[0])
// console.log(`O valor total é ${valor1 + valor2}`)
// console.log(name+ " " +lastName)
// console.log(`Meu nome é ${name} ${lastName}, minha idade é ${idade}`)