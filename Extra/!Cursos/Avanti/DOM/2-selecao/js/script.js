// Seleção por ID
const content = document.getElementById("content")
console.log("content", content)

content.innerHTML = `<p>Parágrafo de texto</p>`
content.style.backgroundColor = "#F00"
content.style.fontSize = "30px"

// Seleção por classe

const classText = document.getElementsByClassName("text")
console.log(classText)
for (text of classText) {
    text.style.color = "#F00"
}

// Seleção por tag

const titles = document.getElementsByTagName("h2")
console.log("titles", titles)
for (title of titles) {
    title.style.fontSize = "40px"
}

// Query selector

const elementFeature = document.querySelector("#feature")
const newElement = document.createElement("p")
newElement.textContent = "Um novo parágrafo"
elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend", `
    <div>
    <p>Outro parágrafo criado dinamicamente</p>
    </div>`)

document.body.insertBefore(newElement, elementFeature)

// Query selectorAll

const links = document.querySelectorAll("#links a")
console.log("links", links)

for (link of links) {
    link.classList.add("feature-links")
    console.log(link.getAttribute("href"))
    link.target="_blank"
    link.title = link.getAttribute("href").slice(0,-5)
}

// remove
content.remove()

// navegação pelo DOM

const lista = document.querySelector("#links ul")
lista.parentNode.style.backgroundColor="red"
lista.children
console.log("Qual elemento?", lista.parentNode)
for(list of lista.children){
    list.style.fontSize="30px"
}
lista.firstElementChild.style.fontSize="10px"