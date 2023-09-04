// teste de conexao

console.log("Conexão feita com sucesso");

//Função para esperar o carregando do DOM antes de acessar os elementos

document.addEventListener("DOMContentLoaded", function(){

//Captura elementos

 

let logoElemento = document.getElementById("logo");
console.log("O elemento do logo: ", logoElemento);

let elementoPost02 = document.getElementById("post02");
console.log("O elemento é: ", elementoPost02);

let elementoFormulario = document.getElementById("formulario");
console.log("O formulario é: ", elementoFormulario);

let elementoSection = document.getElementById("posts");
console.log("O section é: ", elementoSection);

let elementoDataSection = document.getElementsByClassName("post-data");
console.log("A data é: ", elementoDataSection);

let elementoTexto = document.getElementsByClassName("post-texto");
console.log("O texto é: ", elementoTexto);

let elementoRedesSociais = document.getElementsByClassName("lista_redes");
console.log("As redes sociais são: ", elementoRedesSociais);



})

 