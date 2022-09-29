document.getElementById('btGerar').addEventListener('click', function gerarEmail (){
    let resp = document.querySelector('div#resposta');
    let inNome = document.getElementById('inNome');
    let inNomeEmpresa = document.getElementById('inNomeEmpresa');
    let nomeEmpresa = inNomeEmpresa.value;
    let nome = inNome.value;

    //chamando funções
    verificarInfo (nome, nomeEmpresa);
    estilo(resp);

    //tranforma o nome completo em um vetor
    let nomepartes = nome.split(' ');
    let primeiroNome = nomepartes[0];
     //var p concatenar
    let email ='';
    let tamNome = nomepartes.length;
    for(let i =0; i < tamNome; i++){
         //pega a primeira letra de cada nome e sobrenome
        email+= nomepartes[i].charAt(0);
    }
    resp.innerHTML = `${primeiroNome}${email}@${nomeEmpresa}.com.br`;

})
 //valida entrada de dados
function verificarInfo (x, y){
    if(x == ' ' || y == ' '){
        let resp = document.querySelector('div#resposta');
        resp.innerHTML = `Prencha o campo corretamente..`;
    }
}
 //estilo da resposta
function estilo(y){
    let word = document.getElementById('resposta');
    word.style.backgroundColor = '#dbdbdb';
}