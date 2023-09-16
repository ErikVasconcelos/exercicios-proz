// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function() {
    usernameLabel.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("required-popup")
})

// Validar valor do input
usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    
    if(valor.length < 3) {
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu nome de usuário deve possuir 3 ou mais caracteres";
        usernameHelper.classList.add("visible");
        
    } else {
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameInput.classList.add("correct");
    }
})
/*---------------------------------- eventos do email --------------------------------- */

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change", function(emailCorrect){
    let emailCorreto = emailCorrect.target.value
    
    if(emailCorreto.length < 3) {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Você deve inserir um e-mail válido, ex.: (proz@portaltech.com)";
        emailHelper.classList.add("visible");
        
    } else {
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        usernameInput.classList.add("correct");
    }
})
