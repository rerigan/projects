// let frutas = ["banana", "maçã", "mamão", "abacate"]
// for(let fruta of frutas){
//     console.log (fruta)
// }

let pessoa = {nome:"João",idade:30,genero:"Masculino"}
for(let key in pessoa){
    console.log(`${key}:${pessoa[key]}`)
}