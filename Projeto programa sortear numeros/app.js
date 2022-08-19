let chances = 5;
// vetor com os numeros que o usuário apostou
let numeros = []; 
//variavel que vai sortear o número
let numSorteado = Math.floor(Math.random() * 100 + 1); 
//var pra contar quantas vezes o número apostado é igual ao sorteado (se existir)
let cont = 0; 

//função principal que coleta e valida os dados digitados pelo usuário
document.getElementById('btApostar').addEventListener('click', function apostarNum() {
    let inNumber = document.getElementById('inNumber');
    let number = Number(inNumber.value);

    let respThree = document.querySelector('div#resposta');

    if (number == '' || number > 100) {
        respThree.innerHTML = `O valor do campo está incorreto, preencha-o corretamente..`;
        inNumber.focus();
        return;
    } else {
        listarNum(number);
        chances--;
        inNumber.value = '';
        inNumber.focus();
    }
})
//funçção para listar os números que o usuário apostar
function listarNum(n) {
    numeros.push(n);
    let tamNu = numeros.length;
    let respThree = document.querySelector('div#resposta');
    let resp = document.querySelector('div#numSoteados');

    let list = '';

    for (let i = 0; i < tamNu; i++) {
        list += numeros[i] + ', ';
    }

    resp.innerHTML = `${list}`;
    respThree.innerHTML = `<strong>${chances} chances</strong>`;
    if (numeros.length == 6) {
        let input = document.querySelector('input');
        input.readOnly = true;
        numeroSorteado();
        filter ();
        document.querySelector('.btApostar').classList.add('esconder');
        document.querySelector('.btApostar-novamente').classList.add('aparecer');
    }
}
function numeroSorteado () {
    let respTwo = document.querySelector('div#numeroSorteado');
    respTwo.innerHTML = `${numSorteado}`;
    modificarEstilo();
}
//função p modificar o estilo css do número sorteado
function modificarEstilo() {
    document.getElementById('numeroSorteado').style.backgroundColor = '#ffac69';
    document.getElementById('numeroSorteado').style.display = 'block';
}
//criando com parametros função para filtrar
function filtrar(value) {
    let tamNum = numeros.length;
    for (let i = 0; i < tamNum; i++) {
        if (value == numSorteado) {
            cont++;
            return value; //retorna o valor igual ao numero sorteado
        }
    }   
}
function filter (){
    numeros.filter(filtrar);
    let respThree = document.querySelector('div#resposta');
    if(cont == 1){
        respThree.innerHTML = `Parabéns você acertou o número  ${numSorteado}`;
    }else if (cont > 1 && cont <=6){
        respThree.innerHTML = `Parabéns você acertou o número ${cont} vezes o número ${numSorteado}`;
    }else{
        respThree.innerHTML = `Você não acertou nenhum número, o número sorteado é ${numSorteado}`;
    }
}//função para recarregar a página
document.getElementById('btApostar-novamente').addEventListener('click', function apostarNovamente (){
    location.reload();
})



