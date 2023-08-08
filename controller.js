


var dadosLista = [];

function salvarUser(){

    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){

        dadosLista.push(nomeUser);
        criarLista();
        document.getElementById('nomeUser').value ='';


        

    }

}
//função para  criar linhas de usuario
function criarLista(){

    let tabela = document.getElementById('tabela').innerHTML =  '<tr><th>LISTA</th><th>Ações</th></tr>';

 

    for(let i = 0;i <= (dadosLista.length - 1);i++){

        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-light' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class ='btn btn-secondary' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button><button class ='btn btn-dark' onclick=''>Concluído</button></td></tr>";

        document.getElementById('tabela').innerHTML = tabela;

    }

}

// FUNÇÃO PARA FAZER NOME

function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1);
}

// FUNÇÃO PARA FEITO NOME
function excluir(i){
    dadosLista.splice((i - 1),1);
    document.getElementById(tabela).deleteRow(i);

}
