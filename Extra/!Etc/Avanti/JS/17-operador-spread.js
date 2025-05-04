

const numeros = [1, 2, 3, 4]
const numeros2 = [5, 6, 7, 8, 9]
// Copiar um array
const copia = [...numeros]
// console.log (copia)
// Concatenar arrays
const arraysConcatenados = [...numeros, ...numeros2]
// console.log (arraysConcatenados)

// Adicionar elementos no array

const novoArray = [10,...arraysConcatenados,30]
// console.log (novoArray)

const usuario = {nome:"Ana", idade:30}
const copiaUsuario = {...usuario}
// console.log (copiaUsuario)

// Modificando objetos
const usuarioAtualizado = {...usuario, idade:25,cidade:"Florianópolis"}
// console.log (usuarioAtualizado)

const novousuario = {nome:"João", idade:32}
const novosDados = {genero:"Masculino", DataNascimento:"11/05/2020"}
const usuarios = {...novousuario, ...novosDados}
 
console.log (usuarios)