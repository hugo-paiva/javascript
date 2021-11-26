let breadPrice
let meatPrice
let saladPrice
let cheesePrice

function checkBread() {
    if (document.querySelector('#frances').checked) {
        breadPrice = 3
        document.querySelector('.sua-escolha').innerHTML = document.querySelector('#frances').value + ` -- ${breadPrice} reais`
    } else if (document.querySelector('#australiano').checked) {
        breadPrice = 8
        document.querySelector('.sua-escolha').innerHTML = document.querySelector('#australiano').value + ` -- ${breadPrice} reais`
    } else if (document.querySelector('#brioche').checked) {
        breadPrice = 6
        document.querySelector('.sua-escolha').innerHTML = document.querySelector('#brioche').value + ` -- ${breadPrice} reais`
    }
    if (breadPrice) {
        document.querySelector('#firstchoice').style.backgroundColor = '#25111a88'
    }
}

function checkMeat() {
    if (document.querySelector('#picanha').checked) {
        meatPrice = 13
        document.querySelector('.sua-escolha2').innerHTML = document.querySelector('#picanha').value + ` -- ${meatPrice} reais`
    } else if (document.querySelector('#costela').checked) {
        meatPrice = 10
        document.querySelector('.sua-escolha2').innerHTML = document.querySelector('#costela').value + ` -- ${meatPrice} reais`
    } else if (document.querySelector('#vegano').checked) {
        meatPrice = 12
        document.querySelector('.sua-escolha2').innerHTML = document.querySelector('#vegano').value + ` -- ${meatPrice} reais`
    }
    if (meatPrice) {
        document.querySelector('#secondchoice').style.backgroundColor = '#25111a88'
    }

}

function checkSalad() {
    if (document.querySelector('#alface').checked) {
        saladPrice = 1.5
        document.querySelector('.sua-escolha3').innerHTML = document.querySelector('#alface').value + ` -- ${saladPrice} reais`
    } else if (document.querySelector('#tomate').checked) {
        saladPrice = 1.5
        document.querySelector('.sua-escolha3').innerHTML = document.querySelector('#tomate').value + ` -- ${saladPrice} reais`
    } else if (document.querySelector('#sem-salada').checked) {
        saladPrice = '0'
        document.querySelector('.sua-escolha3').innerHTML = document.querySelector('#sem-salada').value + ` -- ${saladPrice} reais`
    }
    if (saladPrice) {
        document.querySelector('#thirdchoice').style.backgroundColor = '#25111a88'
    }

}

function checkCheese() {
    if (document.querySelector('#mussarela').checked) {
        cheesePrice = 3
        document.querySelector('.sua-escolha4').innerHTML = document.querySelector('#mussarela').value + ` -- ${cheesePrice} reais`
    } else if (document.querySelector('#prato').checked) {
        cheesePrice = 3
        document.querySelector('.sua-escolha4').innerHTML = document.querySelector('#prato').value + ` -- ${cheesePrice} reais`
    } else if (document.querySelector('#cheddar').checked) {
        cheesePrice = 5
        document.querySelector('.sua-escolha4').innerHTML = document.querySelector('#cheddar').value + ` -- ${cheesePrice} reais`
    }
    if (cheesePrice) {
        document.querySelector('#fourthchoice').style.backgroundColor = '#25111a88'
    }
}

function sendOrder() {
    if (
        breadPrice &&
        meatPrice &&
        saladPrice &&
        cheesePrice
        ) {
        
    let bread = document.querySelector('.sua-escolha').innerHTML
    let meat = document.querySelector('.sua-escolha2').innerHTML
    let salad = document.querySelector('.sua-escolha3').innerHTML
    let cheese = document.querySelector('.sua-escolha4').innerHTML

    document.querySelector('.order').innerHTML = `
    Meu amigo chapeiro o pedido é: </br>
    Pão ${bread} </br>
    Hamburguer de ${meat} </br>
    Opção de salada: ${salad} </br>
    Queijo ${cheese} </br>
    `
    } else {
        document.querySelector('.order').innerHTML = 'Você esqueceu de confirmar alguma opção do seu hamburguer! Confirme após cada escolha e então clique nesse botão.'

    }

}