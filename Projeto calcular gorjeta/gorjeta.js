function calcularGorjeta() {
    let inTotal = document.getElementById("inTotal");
    let inTaxa = document.getElementById("inTaxa");
    let resp = document.querySelector('div#resposta');

    if (inTaxa.value == "" || inTotal.value == "") {
        resp.innerHTML = `Preencha o campo corretamente..`
        inTotal.focus();
        return;
    }else{
        let taxa = Number(inTaxa.value);
        let total = Number(inTotal.value);
        let soma = total * taxa / 100;
        let totalApagar = soma + total;
        resp.innerHTML = `<p>O valor da gorgeta é R$${soma.toFixed(2)}</p> <br>`
        resp.innerHTML += `<p>O valor total a pagar é R$ ${totalApagar.toFixed(2)}</p>`
    }
}
