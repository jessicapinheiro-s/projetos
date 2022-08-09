function contador() {
    let textBox = document.getElementById('textBox');
    let txt = textBox.value;

    let resp = document.querySelector('span#caracteres');
    let respW =document.querySelector('span#words')

    let listLetra = txt.split("");
    let listEspaco = txt.split(" ");

    let tamLetra = listLetra.length;
    let tamPalavra = listEspaco.length;

    let cont = 0;
    for (let i = 0; i < tamLetra; i++) {
        cont += 1;
        resp.innerHTML = ` ${cont} `;
        respW.innerHTML = `${tamPalavra}`;
    }

    if(txt == ''){
        resp.innerHTML = ` 0`;
        fodase.innerHTML = ` 0` ;
    }
}





