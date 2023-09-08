const elementButton = document.querySelector(".button-login");

elementButton.style.color = "white";
elementButton.style.background = "blueviolet";
elementButton.style.fontSize = "16px";
elementButton.style.width = "540px";
elementButton.style.borderRadius = "15px";


// Simulando o input do usuário
const userComment = prompt("Escreva algo:");
console.log("Interação inicial do usuário:", userComment);

// Capturar o id do elemento
const userInput = document.getElementById("login-user");

// Adicionando o error na class, dentro do input do usuário
userInput.classList.add("error");

// Captura da mensagem de erro no DOM
const errorMessage = document.querySelectorAll(".error-text");

// Adicionando a classe "error" à mensagem de erro
errorMessage.classList.add("error");

// Mostrando no LiveServer
errorMessage.style.display = "block";
