////ARTHURHFAGUNDES////

const form = document.getElementById('form-dados');
const nomes = []; // CRIA UMA CONSTANTE EM ARRAY
const telefones = [];

let linhas = ''; // CRIA UMA STRING VAZIA (para futuramente adicionar uma linha na tabela)

form.addEventListener('submit', function(e) { // ELIMINA AS AÇÕES PADRÕES REFERENTES A CONSTANTE FORM (tipo um reset)
    e.preventDefault();

    adicionarLinha(); // EXECUTA A FUNÇÃO
    atualizaTabela();
    adicionaEventosRemover();
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)) { // (includes) VERIFICA SE EXISTE JÁ EXISTE O NOME
        alert(`O contato "${inputNome.value}" já existe, tente adicionar um sobrenome ou excluir um contato`); 
    }
    else {
        nomes.push(inputNome.value); // (push) PARA ADICIONAR INFORMAÇÕES NO ARRAY
        telefones.push(parseFloat(inputTelefone.value)); // (parseFloat) PARA TRANSFORMAR A INFORMAÇÃO EM UM NÚMERO
    
        //para adicionar uma linha na tabela ↴ 
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`; // (+=) IGUAL A " linha = linha + conteudo"
        linha += `<td>${inputTelefone.value}</td>`; // (td) DADO DA TABELA
        linha += '<td><button class="info"><img src="./images/info.png" title="Mais informações"></button></td>'
        linha += '<td><button class="remove"><img src="./images/remove.png" title="Deletar contato"></button></td>'
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = ''; // LIMPA OS INPUTS (pode ser reutilizado)
    inputTelefone.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; // (innerHTML) PARA INSERIR INFORMAÇÕES DENTRO DO HTML
};

//* UM TESTE ↴ JÁ VERIFIQUEI E TEM COISAS A CORRIGIR *//
function adicionaEventosRemover() {
    const botoesRemover = document.querySelectorAll('.remove');

    botoesRemover.forEach(function(botao) { // (forEach) REPETE EM CADA LINHA E ADCIONA UM EVENTO
        botao.addEventListener('click', function(e) { 
            const linha = e.target.closest('tr'); // (closest) ENCONTRA A LINHA MAIS PRÓXIMA
            linha.remove(); // REMOVE A LINHA
        });
    });
}