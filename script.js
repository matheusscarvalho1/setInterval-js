let contador = document.querySelector('#contador')
let count = 0;


// setInterval -> Executa a função 'x' abaixo a cada 'x' tempo
let intervalo = setInterval (function(){
    count++
    contador.innerText = count;
}, 100)


let botaoPausar = document.querySelector('#botaoPausar')

// clearInterval -> Limpar/Pausar o intervalo
botaoPausar.onclick = function () {
    clearInterval(intervalo)
}