function toggledark() {
    document.documentElement.classList.toggle("dark");
};


// fetch

let cartas = [];

fetch('cartas.json')
    .then(response => response.json())
    .then(data => {
        cartas = data;
        sortearCarta(); // Já mostra uma carta assim que carregar
    })
    .catch(error => {
        console.error("Erro ao carregar cartas:", error);
        document.getElementById('texto-carta').textContent = "Erro ao carregar cartas.";
    });

function sortearCarta() {
    const p = document.getElementById('texto-carta');

    if (cartas.length === 0) {
        p.textContent = "As cartas ainda estão carregando...";
        return;
    }

    const indice = Math.floor(Math.random() * cartas.length);
    p.textContent = cartas[indice];
}

// Supondo que as cartas estejam em um array de objetos, onde cada objeto é uma carta
const todasAsCartas = [/* suas cartas aqui */];

// Função para randomizar as cartas
function randomizarCartas(cartas) {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]]; // Troca as cartas
    }
    return cartas.slice(0, 10); // Retorna as 10 primeiras cartas
}

// Randomizar e selecionar 10 cartas
const cartasDoTime = randomizarCartas(todasAsCartas);