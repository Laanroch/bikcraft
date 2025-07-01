const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href;
    
    //url.includes verifica se uma palavra existe ou não naquela string
    if(url.includes(href)){
        link.classList.add("ativo");
    }
    
}

links.forEach(ativarLink);

//Ativar itens

const parametros = new URLSearchParams (location.search);

function ativarProduto(parametros){
    const elemento = document.getElementById(parametros);
    if(elemento){
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);