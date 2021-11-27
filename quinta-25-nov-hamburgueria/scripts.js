let breadPrice
let meatPrice
let saladPrice
let cheesePrice

let breadOption = document.querySelector('name["bread"]:checked')
let meatOption = document.querySelector('name["meat"]:checked')
let saladOption = document.querySelector('name["salad"]:checked')
let cheeseOption = document.querySelector('name["cheese"]:checked')

function sendOrder() {
    if (breadOption == 'frances') {
        breadPrice = 3
    } else if (breadOption == 'australiano') {
        breadPrice = 8
    } else if (breadOption == 'brioche')
        breadPrice = 6

    if (meatOption == 'picanha') {
        meatPrice = 10
    } else if (meatOption == 'costela') {
        meatPrice = 20
    } else if (meatOption == 'vegano') {
        meatPrice = 30
    }

    if (saladOption == 'alface') {

    } else if (saladOption == 'tomate') {

    } else if (saladOption == 'sem salada') {

    }


    if (cheeseOption == 'mussarela') {

    } else if (cheeseOption == 'prato') {

    } else if (cheeseOption == 'cheddar') {

    }



}
