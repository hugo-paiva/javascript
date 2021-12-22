/*
Joana gostou muito dos seus serviços e continua nos demandando novos serviços, agora ela quer incluir uma forma de filtrar os títulos cadastrados.

Para isso crie um formulário contendo os seguintes filtros:

Data início;
Data fim;
Valor mínimo;
Valor máximo;
O valor máximo e mínimo são referentes ao valor do título sem juros.
A data referida, é a data de vencimento. 
O uso do método filter() é obrigatório
*/

// Declaring variables
let daysLate = ''
let finalPrice = ''
let taxes
let ALL_MY_RECEIPTS = []
let CLIENT_NAME
let EXPIRE_DATE
let PRICE
let RECEIPT
let notasWithTaxes = {}
let filteredList

function filtrar() {
    let minValue = document.querySelector('#min-value').value
    let maxValue = document.querySelector('#max-value').value
    let beginning = new Date(document.querySelector('#beginning').value)
    let endDate = new Date(document.querySelector('#end-date').value)
    
    filteredList = ALL_MY_RECEIPTS
    // after receiving all objects from ALL_MY_RECEIPTS it tests for blank inputs and jump them at the filtering process
    if (maxValue != '') {
        filteredList = filteredList.filter(currentValue => currentValue.PRICE < maxValue)
    }
    if (minValue != '') {
        filteredList = filteredList.filter(currentReceipt => currentReceipt.PRICE >= minValue)
    }
    if (!isNaN(beginning.getTime())) {
        filteredList = filteredList.filter(currentReceipt => currentReceipt.EXPIRE_DATE > beginning)
    }
    if (!isNaN(endDate.getTime())) {
        filteredList = filteredList.filter(currentReceipt => currentReceipt.EXPIRE_DATE <= endDate)
    }
    buildList(filteredList)
}
function storeReceipts() {
    CLIENT_NAME = document.querySelector('#name').value
    EXPIRE_DATE = new Date(document.querySelector('#expire-date').value) // return the input date as an object with type Date 
    PRICE = Number(document.querySelector('#price').value)

    if (CLIENT_NAME == '' || PRICE == '') {
        window.alert('Você não preencheu os 3 campos. Por favor, complete e tente novamente!')
        return
    }
    RECEIPT = { CLIENT_NAME, EXPIRE_DATE, PRICE, daysLate, finalPrice }

    ALL_MY_RECEIPTS.push(RECEIPT)
    document.querySelector('#form').reset()

    buildList(ALL_MY_RECEIPTS)
}

function buildList(list) {
    let row = list.map(function (item) {
        return `
            <tr>
                <td>${item.CLIENT_NAME}</td>
                <td>${item.EXPIRE_DATE.toLocaleDateString('pt-BR')}</td>
                <td>${item.PRICE}</td>
                <td>${item.daysLate}</td>
                <td>${item.finalPrice.toFixed(2)}</td>
            </tr>
            `
    })
    document.querySelector("#tbPodio tbody").innerHTML = row.join("");
    console.log(list)
    document.querySelector("#sum").innerHTML = list.reduce((acumulator, currentValue) => {
        return acumulator + currentValue.finalPrice
    }, 0).toFixed(2)
}

function startCalculations() {
    ALL_MY_RECEIPTS.forEach(function (recibo) {
        const presentDate = new Date() // retorna a data atual
        recibo.daysLate = Math.floor((presentDate.getTime() - recibo.EXPIRE_DATE.getTime()) / (1000 * 24 * 3600))

        if (recibo.daysLate > 0) {
            taxes = 2 + recibo.daysLate * 0.1 // adiciona 2% de mora mais 0.1% ao dia de juros simples
            recibo.finalPrice = recibo.PRICE + recibo.PRICE * (taxes / 100)
        } else {
            recibo.daysLate = 0
            recibo.finalPrice = recibo.PRICE
        }
    })
    buildList(ALL_MY_RECEIPTS)
}

function sortByName() {
    function compare(a, b) {
        const personA = a.CLIENT_NAME.toUpperCase();
        const personB = b.CLIENT_NAME.toUpperCase();

        let comparison = 0;
        if (personA > personB) {
            comparison = 1;
        } else if (personA < personB) {
            comparison = -1;
        }
        return comparison;
    }

    ALL_MY_RECEIPTS.sort(compare)
    buildList(ALL_MY_RECEIPTS)
}

function sortByDate() {
    function compare(a, b) {
        const dateA = a.EXPIRE_DATE
        const dateB = b.EXPIRE_DATE

        let comparison = 0;
        if (dateA > dateB) {
            comparison = 1;
        } else if (dateA < dateB) {
            comparison = -1;
        }
        return comparison;
    }
    ALL_MY_RECEIPTS.sort(compare)
    buildList(ALL_MY_RECEIPTS)
}