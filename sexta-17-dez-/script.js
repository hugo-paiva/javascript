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
let minValue
let maxValue
let beginning
let endDate

function filtrar() {
    minValue = document.querySelector('#min-value').value
    maxValue = document.querySelector('#max-value').value
    beginning = new Date(document.querySelector('#beginning').value)
    endDate = new Date(document.querySelector('#end-date').value)
    // let minValue = 40
    // let maxValue = 130
    // let beginning = new Date(2020,0,01)
    // let endDate = new Date(2020,11,1)
    console.log(minValue, maxValue, beginning, endDate)
    filteredList = ALL_MY_RECEIPTS.filter(currentValue => currentValue.PRICE < maxValue)
    filteredList = filteredList.filter(currentReceipt => currentReceipt.PRICE >= minValue)
    filteredList = filteredList.filter(function(currentReceipt) {
        return currentReceipt.EXPIRE_DATE.getTime() > beginning.getTime()
    })
    filteredList = filteredList.filter(currentReceipt => currentReceipt.EXPIRE_DATE.getTime() <= endDate.getTime())
    buildList(filteredList)
    // O que fazer agora? remover ALL_MY_RECEIPTS do inicio da atribuição acima e usar um array FILTRADO e passar esse array filtrado para o buildList()
}
function storeReceipts() {
    CLIENT_NAME = document.querySelector('#name').value
    EXPIRE_DATE = new Date(document.querySelector('#expire-date').value) // return the input date as an object with Date type
    PRICE = Number(document.querySelector('#price').value)

    if (CLIENT_NAME == '' || PRICE == '') {
        window.alert('Você não preencheu os 3 campos. Por favor tente novamente!')
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
                <td>${item.finalPrice}</td>
            </tr>
            `
    })
    document.querySelector("#tbPodio tbody").innerHTML = row.join("");
    console.log(list)
    document.querySelector("#sum").innerHTML = list.reduce((acumulator, currentValue) => {
        return acumulator + currentValue.finalPrice
    }, 0)
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