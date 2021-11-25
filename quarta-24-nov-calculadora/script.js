let num1 = ''
let num2 = ''

function sum(){
    num1 = Number(document.querySelector('#primeiro').value)
    num2 = Number(document.querySelector('#segundo').value)
    document.querySelector('p').innerHTML = num1 + num2
}

function minus(){
    num1 = Number(document.querySelector('#primeiro').value)
    num2 = Number(document.querySelector('#segundo').value)
    document.querySelector('p').innerHTML = num1 - num2
}

function times(){
    num1 = Number(document.querySelector('#primeiro').value)
    num2 = Number(document.querySelector('#segundo').value)
    document.querySelector('p').innerHTML = num1 * num2
}

function divide(){
    num1 = Number(document.querySelector('#primeiro').value)
    num2 = Number(document.querySelector('#segundo').value)
    document.querySelector('p').innerHTML = num1 / num2
}
