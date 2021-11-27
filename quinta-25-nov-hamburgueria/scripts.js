let breadPrice
let meatPrice
let saladPrice
let cheesePrice

let breadChoosen = document.querySelector('name["bread"]:checked')
let meatChoosen = document.querySelector('name["meat"]:checked')
let saladChoosen = document.querySelector('name["salad"]:checked')
let cheeseChoosen = document.querySelector('name["cheese"]:checked')

function sendOrder() {
    // for (let i = 0; i < 3; i++) {
    //     if breadList[i] == breadChoosen {
                // somethingCool        
    //     }
    // }
    
    
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
    Pão ${bread} </br>
    Hamburguer de ${meat} </br>
    Opção de salada: ${salad} </br>
    Queijo ${cheese} </br>
    `

}
