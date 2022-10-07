function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let cont = 0; cont <= listaDeTeclas.length;cont++) {
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1]; // classList: acessa as classes dos elementos button, temos 2, 0: tecla e 1: tecla_nome do som 
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }
 
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
