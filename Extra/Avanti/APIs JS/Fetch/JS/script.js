// Fetch pegando dados do GitHub

function fetchUser(username) {

    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if (!response.ok) { 
                console.error(error) 
            }
            return response.json()
        })
        .then((user) => {
            console.log("user", user)
            createUserCard(user)
        })
        .catch((error) => {
            console.error(error)
            const app = document.getElementById("app")
            app.innerHTML = `<p style='color:red'>Erro: ${error.message}</p>`
        })
}

// Função para criar o card

function createUserCard(user) {
    const app = document.getElementById("app")
    const card = document.createElement("div")
    card.className = "card"
    const avatar = document.createElement("img")
    avatar.src = user.avatar_url
    avatar.alt = `${user.login}'s avatar`
    const name = document.createElement("h2")
    name.textContent = user.name
    const login = document.createElement("span")
    login.textContent = `@${user.login}`
    const bio = document.createElement("p")
    bio.textContent = user.bio

    card.appendChild(avatar)
    card.appendChild(name)
    card.appendChild(login)
    card.appendChild(bio)

    app.appendChild(card)
}

fetchUser("rerigan")