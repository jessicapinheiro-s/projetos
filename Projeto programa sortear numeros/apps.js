let numeros = [1, 1, 2, 5, 5, 2];
let numSorteado = 6;
let tamNum = numeros.length;

let cont =0;

//criando com parametros função para filtrar
function filtrar(value) {
    for(let i=0; i< tamNum; i++){
        if (value == numSorteado) {
            cont++;
            //return value; //retorna o valor igual ao numero sorteado
        }
    }
}
/*var numSortCorreto =*/ //numeros.filter(filtrar);
//console.log(numSortCorreto);
//console.log(cont);


function alo (){
    numeros.filter(filtrar);
    if(cont == 1){
        console.log('Parabéns você acertou o número '+ numSorteado);
    }else if( cont > 1){
        console.log('Parabéns você acertou ' + cont + ' vezes o número '+ numSorteado);
    }
}
alo();
/*console.log(numSortCorreto);
console.log(cont);*/


