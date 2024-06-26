function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];                                                     //array dos números sorteados
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {                                //teste lógico para saber se o número(s) está incluso no array
            numero = gerarNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numero);                                             //adiciona o número sorteado ao array
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>` 
                                                                            // para incluir uma propriedade ao elemento do HTML

    ativarBotaoReiniciar();
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);               // retorna um número inteiro entre dois valores definidos
}

function ativarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    
    //se botão desabilitado renomear class para ativá-lo, senão renomear a classe para desabilitado
    if (botao.classList.contains('container__botao-desabilitado')) {        // teste lógico da classe
        botao.classList.remove('container__botao-desabilitado');            // remover e adicionar uma classe no HTLM
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// limpa os campos do input para reiniciar o jogo
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    ativarBotaoReiniciar();
}