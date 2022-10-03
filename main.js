function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

while (cont <= listaDeTeclas.length) {
    listaDeTeclas[cont].onclick = tocaSomPom;
    cont += 1;
} 