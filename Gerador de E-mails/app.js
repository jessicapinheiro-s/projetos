document.getElementById('btGerar').addEventListener('click', function gerarEmail (){
    let resp = document.querySelector('div#resposta');
    let inNome = document.getElementById('inNome');
    let inNomeEmpresa = document.getElementById('inNomeEmpresa');
    let nomeEmpresa = inNomeEmpresa.value;
    let nome = inNome.value;
    estilo(resp);
    let nomepartes = nome.split(' ');
    let primeiroNome = nomepartes[0];
    let email ='';
    let tamNome = nomepartes.length;
    for(let i =0; i < tamNome; i++){
        email+= nomepartes[i].charAt(0);
    }
    resp.innerHTML = `${primeiroNome}${email}@${nomeEmpresa}.com.br`;

})
function verificarInfo (){
    if(x == ' '){
        let resp = document.querySelector('div#resposta');
        resp.innerHTML = `Prencha o campo corretamente..`;
    }
}
function estilo(y){
    let word = document.getElementById('resposta');
    word.style.backgroundColor = '#fff';
}