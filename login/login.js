const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

// console.log(campoSenha.type);

btnSenha.addEventListener("click", function () {

    // if (campoSenha.type == "password") {
    //     campoSenha.type = "text";
    // } else {    
    //     campoSenha.type = "password";
    // }

!campoSenha == "password" ? campoSenha.type = "text" : campoSenha.type = "password";

})