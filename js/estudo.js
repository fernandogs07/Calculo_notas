document.addEventListener('keypress', function(e){
    if(e.key == "Enter" ){
        calcular();
    }
 }, false);

// Cria a variável que rece a tabela
var tablePrincipal = document.getElementById('table_alunos2')

// Cria o array que vai receber os objetos
const lista = []


function calcular(){
    // Declaração de variáveis
    const aluno = document.getElementById("aluno").value
    const nota1 = parseFloat(document.getElementById("nota1").value)
    const nota2 = parseFloat(document.getElementById("nota2").value)
    var media = parseFloat((nota1 + nota2) / 2)
    var situacao

// Validação de campos em branco
if(aluno=='' || isNaN(nota1) || isNaN(nota2)){
    alert("Campos não podem ficar em branco")
}else if(nota1>10 || nota2>10){
        nota1.value.innerHTML = ''
        nota1.value.innerHTML=''
        // alert("As notas não podem ser maior que 10")
        // location = location
       
    }else{
// verificação de Aprovado e Reprovado
if(media >= 6.75){
    situacao = "Aprovado"
}else{
    situacao = "Reprovado"
}
// insere os objetos de armazenamento dos dados dos alunos na array lista
lista.push({'nome': aluno, 'nota1':nota1,'nota2':nota2,'media':media,'situacao':situacao})

// Função que cria a linha com os dados
const nomes = function(){
    for(let i=0;i<lista.length;i++){
        var tableHtml ='<tr>'+
        '<td>'+lista[i].nome+'</td>'+
        '<td>'+lista[i].nota1+'</td>'+
        '<td>'+lista[i].nota2+'</td>'+
        '<td>'+lista[i].media+'</td>'+
        '<td>'+lista[i].situacao+'</td>'+
    '</tr>'
    
    }
    // Aqui jogamos a linha dentro da tabela
    tablePrincipal.innerHTML += tableHtml
}
// Aqui chamamos a função nomes
nomes();
}
}


// Próximo passo é criar os botões de exclusão e impressão