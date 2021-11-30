let breadPrice
let meatPrice
let saladPrice
let cheesePrice

function sendOrder() {
    // Ideas for the next try... use loops
    // breadPrice = document.querySelector('input[breadPrice]:checked').value
    // for (let i = 0; i < 3; i++) {
    //     if breadList[i] == breadChoosen {
                // somethingCool        
    //     }
    // }
    // 
    let breadChoosen = document.querySelector('input[name="bread"]:checked').value;
    let breadPrice = document.querySelector('input[name="bread"]:checked').dataset.breadprice;
    console.log(typeof(breadPrice));
    let meatChoosen = document.querySelector('input[name="meat"]:checked').value  
    let saladChoosen = document.querySelector('input[name="salad"]:checked').value
    let cheeseChoosen = document.querySelector('[name="cheese"]:checked').value

    if (breadChoosen == 'frances') {
        breadPrice = 3
    } else if (breadChoosen == 'australiano') {
        breadPrice = 8
    } else if (breadChoosen == 'brioche') {
        breadPrice = 6
    }

    if (meatChoosen == 'picanha') {
        meatPrice = 13
    } else if (meatChoosen == 'costela') {
        meatPrice = 10
    } else if (meatChoosen == 'vegano') {
        meatPrice = 12
    }

    if (saladChoosen == 'alface') {
        saladPrice = 1.5
    } else if (saladChoosen == 'tomate') {
        saladPrice = 1.5
    } else if (saladChoosen == 'sem salada') {
        saladPrice = 0
    }

    if (cheeseChoosen == 'mussarela') {
        cheesePrice = 3
    } else if (cheeseChoosen == 'prato') {
        cheesePrice = 3
    } else if (cheeseChoosen == 'cheddar') {
        cheesePrice = 5
    }

    document.querySelector('.order').innerHTML = `
    O preço é R$ ${breadPrice+meatPrice+saladPrice+cheesePrice} </br>
    Meu amigo chapeiro o pedido é: </br>
    Pão ${breadChoosen} -- ${breadPrice} reais </br>
    Hamburguer de ${meatChoosen} -- ${meatPrice} reais </br>
    Opção de salada: ${saladChoosen} -- ${saladPrice} reais </br>
    Queijo ${cheeseChoosen} -- ${cheesePrice} reais </br>
    `
}
