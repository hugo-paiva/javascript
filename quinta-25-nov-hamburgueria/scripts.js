let breadPrice
let meatPrice
let saladPrice
let cheesePrice

function sendOrder() {
    // for (let i = 0; i < 3; i++) {
    //     if breadList[i] == breadChoosen {
                // somethingCool        
    //     }
    // }
    // 
    let breadChoosen = document.querySelector('input[name="bread"]:checked').value
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
        meatPrice = 10
    } else if (meatChoosen == 'costela') {
        meatPrice = 20
    } else if (meatChoosen == 'vegano') {
        meatPrice = 30
    }

    if (saladChoosen == 'alface') {
        saladPrice = 5
    } else if (saladChoosen == 'tomate') {
        saladPrice = 5
    } else if (saladChoosen == 'sem salada') {
        saladPrice = 15
    }


    if (cheeseChoosen == 'mussarela') {
        cheesePrice = 9
    } else if (cheeseChoosen == 'prato') {
        cheesePrice = 8
    } else if (cheeseChoosen == 'cheddar') {
        cheesePrice = 19
    }


    document.querySelector('.order').innerHTML = `
    O preço é R$ ${breadPrice+meatPrice+saladPrice+cheesePrice} </br>
    Meu amigo chapeiro o pedido é: </br>
    Pão ${breadChoosen} ${breadPrice} reais </br>
    Hamburguer de ${meatChoosen} ${meatPrice} reais </br>
    Opção de salada: ${saladChoosen} ${saladPrice} reais </br>
    Queijo ${cheeseChoosen} ${cheesePrice} reais </br>
    `
}
