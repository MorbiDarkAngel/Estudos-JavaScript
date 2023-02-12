//adicione números de 1 a 100
let entrada = document.querySelector('input#entrada')
let lista = document.querySelector('select#lista')
let resultado = document.querySelector('div#resultado')

// Criando um novo array ( lista )
let novoArray = []

// Se número inserido for um número entre os par}Ametros estabelecidos
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Verificar se número está na lista 
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}


function adicionar() {  
    //
    // Se existir varável (número da variável) && não houver o valor na lista do novo array criado) faça {}
    if (isNumero(entrada.value) && !inLista(entrada.value, novoArray)) {
        // > > > window.alert('Valor inserido no array e ye eey')

        // Inserindo valores no ARRAY
        novoArray.push(Number(entrada.value))

        //Adicionando element no OPTION
        let item = document.createElement('option')
        item.text = `Valor ${entrada.value} adicionado`

        //Adicionando o item na lista
        lista.appendChild(item)

        // Nesse ponto, os valores já são exibidos na tela


    } else {
        window.alert('Valor inválido ou já inserido')
    }
    entrada.value = ''
// A função abaixo redireciona ao campo de inserção de valores
    entrada.focus()
}

function finalizar() {
    if(novoArray.length == 0) {
        window.alert('Adicione números antes de finalizar.')
    }
    else {
        let total = novoArray .length

        resultado.innerHTML = ''
        resultado.innerHTML += `<p><b>${total}</b> números cadastrados</p>`
    }
}