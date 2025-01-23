

let listaAmigos = [];

function dica()
{
   document.getElementById("openModalBtn").onmouseover = function(){
    document.getElementById("modal").style.display = "inline";
   }

   document.getElementById("openModalBtn").onmouseout = function(){
    document.getElementById("modal").style.display = "none";
   }

}

dica();

function listarAmigos()
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {

        lista.innerHTML += `<li> ${listaAmigos[i]}  </li>` ;
    }
}


function sortearAmigo(){
 
    if(listaAmigos == "" || listaAmigos.length ==  1)
    {
        let resultadoErrado = document.getElementById('resultadoErrado');
        resultadoErrado.innerHTML = "Nomes insuficientes, por favor insira mais nomes!" ;
       
        let btnAdd = document.querySelector('button-add').onmouseover;
        resultadoErrado.innerHTML = "";



    }
    else
    {

        resultadoErrado.innerHTML = "";
        let resultado = document.getElementById('resultado');
        let numero = parseInt(Math.random() * listaAmigos.length);
        resultado.innerHTML = `Seu amigo secreto é: ${listaAmigos[numero]}`;
    }
    
}


function limpaCampos()
{
   NomeAmigo = document.querySelector('input');
   NomeAmigo.value = '';

}

function adicionarAmigo() {
    
    let amigo = document.querySelector('input').value;
    
    if (amigo != "") { 
        listaAmigos.push(amigo); 
        console.log(listaAmigos);
        listarAmigos();
        limpaCampos(); 
        
    } else {
        let resultadoErrado = document.getElementById('resultadoErrado');
        resultadoErrado.innerHTML = "Por favor insira um nome válido!" ;

        // Seleciona o botão corretamente usando a classe
           let btnAdd = document.querySelector('.button-add');

// Adiciona o evento de mouseover ao botão
        btnAdd.onmouseover = function() {
    // Limpa o conteúdo do elemento com id 'resultadoErrado'
    document.getElementById('resultadoErrado').innerHTML = "";
};

        
        
    }
}

