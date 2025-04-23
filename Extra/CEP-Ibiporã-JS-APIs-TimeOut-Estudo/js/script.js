// Variável para debounce
let timeout;

// Função chamada a cada digitação com debounce
function handleInput() {
  clearTimeout(timeout);
  timeout = setTimeout(buscarCep, 2000); // 2 segundos de espera
}

// Função principal de busca
async function buscarCep() {
  console.log('Iniciando busca de CEP'); // DEBUG: verifica se a função é chamada
  const rua = document.getElementById('rua').value.trim();
  const resultadoDiv = document.getElementById('resultado');

  if (!rua) {
    resultadoDiv.innerHTML = '';
    return;
  }

  const url = `https://viacep.com.br/ws/PR/Ibipora/${encodeURIComponent(rua)}/json/`;
  resultadoDiv.innerHTML = 'Buscando...';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    renderizarResultado(data);
  } catch (err) {
    console.error(err);
    resultadoDiv.innerHTML = 'Erro ao buscar dados.';
  }
}

// Função para renderizar resultados no DOM
function renderizarResultado(data) {
  const resultadoDiv = document.getElementById('resultado');
  if (!Array.isArray(data) || data.length === 0 || data.erro) {
    resultadoDiv.innerHTML = 'Nenhum resultado encontrado.';
    return;
  }

  resultadoDiv.innerHTML = data.map(item => `
    <div class="p-4 border-b border-gray-700">
      <div class="flex items-center justify-between bg-gray-800 p-3 rounded-xl mb-2">
        <span class="text-xl font-bold text-white">${item.cep}</span>
        <button onclick="navigator.clipboard.writeText('${item.cep}')" class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 hover:cursor-pointer text-sm">
          Copiar
        </button>
      </div>
      <div class="text-left">
        <strong>Logradouro:</strong> ${item.logradouro}<br/>
        <strong>Bairro:</strong> ${item.bairro}<br/>
        <strong>Cidade:</strong> ${item.localidade} - ${item.uf}
      </div>
    </div>
  `).join('');
}

// Inicializa eventos após carregamento do DOM
function inicializarEventos() {
  const inputRua = document.getElementById('rua');
  inputRua.addEventListener('input', handleInput);
}

document.addEventListener('DOMContentLoaded', inicializarEventos);