'use strict';

const display = document.getElementById("display");
const numeros = document.querySelectorAll('[id *=tecla]'); /*usado p puxar um elemento 
tenha pelomenos em parte do id o nome indicado ex 'tecla' */  
const operadores = document.querySelectorAll('[id *=operador]');

let novoNumero = true;

//inserir no display
const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
    
}
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = () =>{
    novoNumero = true;
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

