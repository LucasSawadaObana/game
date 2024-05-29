function verificaChuteValido(chute) {
    const numero = +chute;

    if (chuteForValido(numero)) {
        elementoChute.innerHTML += '<div>Não é um número</div>';
        return;       
    }
    if (numeroPermitido) {
        elementoChute.innerHTML += '<div>Número fora do intervalo</div>';
        return;
        
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns! Você acertou o número secreto ${numeroSecreto}</h2>
            <button class="play-again" id="play-again">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else if(numero < numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menomaior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForValido(numero) {
    return Number.isNaN(numero);
}

function numeroPermitido(numero) {
    return numero < menorValor || numero > maiorValor;
}

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'play-again') {
        window.location.reload();
    }
});

