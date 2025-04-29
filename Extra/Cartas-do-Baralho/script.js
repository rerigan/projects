// document.getElementById('trocacor').addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark');
// });

// function toggledark() {
//     document.documentElement.classList.toggle("light");
// };

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

function mostrarRegras() {
    esconderTudo();
    document.getElementById('tela-regras').classList.remove('escondido');
}

function mostrarEscolha() {
    esconderTudo();
    document.getElementById('tela-escolha').classList.remove('escondido');
}
function comecar() {
    document.getElementById('regras').classList.toggle('escondido');
}
function botaoComecar() {
    esconderTudo();
    document.getElementById('reidascartas').classList.toggle('escondido');
}

function voltarInicio() {
    esconderTudo();
    document.getElementById('tela-inicial').classList.remove('escondido');
}

function voltarEscolha() {
    esconderTudo();
    document.getElementById('tela-escolha').classList.remove('escondido');
}

function mostrarCartasPretas() {
    esconderTudo();
    document.getElementById('cartas-pretas').classList.remove('escondido');
    gerarPergunta();
}

function mostrarCartasBrancas() {
    esconderTudo();
    document.getElementById('cartas-brancas').classList.remove('escondido');
    gerarRespostas();
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
