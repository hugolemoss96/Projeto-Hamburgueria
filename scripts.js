const listaProdutos = document.querySelector('#lista-produtos');
const mostrarTudo = document.querySelector('.mostrar-tudo');
const mapearTudo = document.querySelector('.mapear-tudo');
const somarTudo = document.querySelector('.somar-tudo');
const filtrarTudo = document.querySelector('.filtrar-tudo');

let minhaLista = ''

function mostrarTodosProdutos(todosProdutos) {
    minhaLista = ''
    todosProdutos.forEach((produtos) => {
        minhaLista +=
            `
    <li>
            <img src=${produtos.src}>
            <p>${produtos.nome}</p>
            <p class="item-preço">R$ ${produtos.preço.toFixed(2).replace('.', ',')}</p>
    </li>
    `
    })

    listaProdutos.innerHTML = minhaLista
}

function mapeandoTodosProdutos() {
    const novosPrecos = menuOpcoes.map((produtos) => ({
    ...produtos,
        preço: produtos.preço * 0.9,
    }))
    mostrarTodosProdutos(novosPrecos)
}

function somarTodosProdutos() {
    const valorTotal = menuOpcoes.reduce((acumulador, produtos) => acumulador + produtos.preço, 0)
    listaProdutos.innerHTML = 
    `
    <li>
        <p>O Valor total dos itens é: R$ ${valorTotal.toFixed(2).replace('.', ',')}</p>
    </li>
    
    `
}

function filtrandoTodosProdutos() {
    const produtosFiltrados = menuOpcoes.filter(produto => produto.vegano)
    mostrarTodosProdutos(produtosFiltrados)



}







mostrarTudo.addEventListener('click', () => mostrarTodosProdutos(menuOpcoes))
mapearTudo.addEventListener('click', mapeandoTodosProdutos)
somarTudo.addEventListener('click', somarTodosProdutos)
filtrarTudo.addEventListener('click', filtrandoTodosProdutos)

