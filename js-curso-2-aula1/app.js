let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1;

// interação entre js e html

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite);
    let quantidadeElementosLista = listaNumerosSorteados.length;
    
    if(quantidadeElementosLista == numeroLimite)
    {
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido))
    {
       return gerarNumero();
    }
    else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um  numero entre 1 e 100');
    
}

exibirMensagemInicial();
function limpaCampos()
{
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo()
{
    let numeroSecreto = gerarNumero();
    limpaCampos();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    

}


function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto )
    {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto 
        com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if(chute > numeroSecreto)
    {
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        
    }
    else{
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    }
    tentativas++;
    limpaCampos();
    

}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male',{rate: 1.2} );
}

 
