const menu = document.getElementById("menu"); //pegando o elemento pelo ID

// pegar elemento de fomra generica - pode ser classe (precisa trazer ponto) ou pode ser ID (precisa trazer a #)
const navMenu = document.querySelector(".navegacao");

menu.addEventListener("click", function () {

    if(navMenu.className == "navegacao"){
        navMenu.className = "navegacao ativo";
    } 
    else {
        navMenu.className = "navegacao";
    }
})