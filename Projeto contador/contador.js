var id;
let contador = 0;
let contadorRegre = 1000;

function contadores() {
    let elemento = document.querySelector('span#contador');
    let radio = document.getElementsByName('contadorRadio');
    if (radio[0].checked) {
        id = setInterval(() => elemento.innerHTML = contador++, 1000);
    } else {
        id = setInterval(() => elemento.innerHTML = contadorRegre--, 1000);
    }
}
function pararContagem() {
    clearInterval(id);
}
function recomecar() {
    contadorRegre = 1000;
    contador = 0;
}



























