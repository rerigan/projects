function toggledark() {
    document.documentElement.classList.toggle("dark");
};

const perguntas = [
    "Qual foi a maior mentira que você já contou?",
    "Se você fosse invisível por um dia, o que faria?",
    "Qual é o seu maior medo?",
];

const respostas = [
    "Comi o último pedaço e neguei.",
    "Fugi da escola pra jogar videogame.",
    "Beijei e fingi que foi sem querer.",
    "Falei que amava e não era verdade.",
    "Fiz besteira no trabalho e culpei outro.",
];

function esconderTudo() {
    document.querySelectorAll('div').forEach(div => div.classList.add('escondido'));
}

function gerarPergunta() {
    const pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];
    document.getElementById('pergunta-texto').textContent = pergunta;
}

function gerarRespostas() {
    const opcoes = embaralhar(respostas).slice(0, 5);
    const container = document.getElementById('opcoes-resposta');
    container.innerHTML = '';
    opcoes.forEach((resposta, i) => {
        const btn = document.createElement('button');
        btn.textContent = `Carta ${i + 1}`;
        btn.onclick = () => alert(resposta);
        container.appendChild(btn);
    });
}

function embaralhar(array) {
    return [...array].sort(() => Math.random() - 0.5);
}
