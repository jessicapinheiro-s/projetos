document.getElementById("btEnviar").addEventListener ('click', function(){
    var inNome = document.getElementById("inNome");
    var inNumero = document.getElementById("inNumero");
    var inEmail = document.getElementById("inEmail");
    var outResposta = document.getElementById("outResposta");

    var nome = inNome.value;
    var numero = Number(inNumero.value);
    var email = inEmail.value;


    if (numero == '' || nome == '' || email == '' || isNaN(numero)) {
        outResposta.textContent = "Preencha os campos corretamente..";
        inNome.focus();
        return;
    }else{
        outResposta.textContent = "Seu formulário foi enviado com sucesso!";
    }
})
