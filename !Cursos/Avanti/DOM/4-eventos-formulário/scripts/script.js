const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (e) => {
    console.log(e.key)
})

inputForm.addEventListener("focus", (e) => {
    inputForm.style.backgroundColor = "red"
})
inputForm.addEventListener("blur", (e) => {
    inputForm.style.backgroundColor = ""
})

function searchResult() {
    const valorBusca = inputForm.value.trim()
    if (valorBusca) {
        resultadoDiv.textContent = `Você buscou por ${valorBusca}`
    } else {
        resultadoDiv.textContent = `Por favor insira a busca!`
    }
}

botaoBusca.addEventListener("click", (e) => {
    searchResult()
})