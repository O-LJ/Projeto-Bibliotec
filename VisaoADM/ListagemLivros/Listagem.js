const livros = document.querySelectorAll('.livro');

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");

const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//configuracao da pagina

//define quantos livros serao mostrados em cada pagina
const livrosPorPagina = 4;

let paginaAtual = 1; //guarda qual pagina o usuario esta visualizando iniciando pela pagina 1

//calculando total de paginas
const totalPaginas = Math.ceil(livros.length / livrosPorPagina); //arredonda para cima, caso a quantidade de livros nao seja divisivel por 4

//funcao resposavel por mostrar a pagina (atualizar os elementos)
function mostrarPagina(pagina) {
    //calcula o indice inicial e final dos livros que serao mostrados na pagina atual
    const inicio = (paginaAtual - 1) * livrosPorPagina;
    const fim = inicio + livrosPorPagina;

    //percorre todos os livros da lista do HTML
    //"livros" representa o elemento atual
    //"posicao" representa a posicao do elemento atual na lista
    livros.forEach((livro, posicao) => {

        if (posicao >= inicio && posicao < fim) { //esse if indica se o indice ou posicao do livro esta dentro do intervalo da pagina atual
            //mostra o elemento na tela
            livro.style.display = "grid";
        } else {
            //esconde o elemento da tela
            livro.style.display = "none";
        }


    })


    numeroPagina.textContent = paginaAtual; //atualiza o numero da pagina na tela
    let ultimolivro = fim; //define fim como a posicao do ultimo livro mostrado
    if (ultimolivro > livros.length) { ultimolivro = livros.length; }// se o vlaor ultrapassar a quantidade real de livros usamos a quandidade total

    quantidadeLivros.textContent = `Mostrando ${ultimolivro} de ${livros.length} livros.`


};

botaoProxima.addEventListener("click", () => {
    if (paginaAtual < totalPaginas) {
        paginaAtual++;
        mostrarPagina();
    }
})

//evento de clique no botao de pagina anterior
botaoAnterior.addEventListener("click", () => {
    //só permite voltar se não estivermos na primeira pagina
    if (paginaAtual > 1) {
        paginaAtual--;
        mostrarPagina();
    }

})

//quando a pagina carregar precisamos executar a função de mostrar página uma vez para esconder os livros que não pertencem a primeira pagina
mostrarPagina();