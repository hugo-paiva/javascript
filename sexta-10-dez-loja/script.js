let daysLate = ''
let finalPrice = ''
let taxes
let ALL_MY_RECEIPTS = []
let CLIENT_NAME
let EXPIRE_DATE
let PRICE
let RECEIPT
let notasWithTaxes = {}

function storeReceipts() {
    CLIENT_NAME = document.querySelector('#name').value
    EXPIRE_DATE = new Date(document.querySelector('#expire-date').value)
    PRICE = Number(document.querySelector('#price').value)

    RECEIPT = { CLIENT_NAME, EXPIRE_DATE, PRICE, daysLate, finalPrice }

    ALL_MY_RECEIPTS.push(RECEIPT)
    document.querySelector('#form').reset()

    buildList()
}

function buildList() {
    let podioPorPais = ALL_MY_RECEIPTS.map(function (item) {
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
    document.querySelector("#tbPodio tbody").innerHTML = podioPorPais.join("");
}

function startCalculations() {
    ALL_MY_RECEIPTS.forEach(function (recibo) {
        const presentDate = new Date() // retorna a data atual
        recibo.daysLate = Math.floor((presentDate.getTime() - recibo.EXPIRE_DATE.getTime()) / (1000 * 24 * 3600)) - 1

        if (recibo.daysLate > 0) {
            taxes = 2 + recibo.daysLate * 0.1 // adiciona 2% de mora mais 0.1% ao dia de juros simples
            recibo.finalPrice = recibo.PRICE + recibo.PRICE * (taxes / 100)
        } else {
            recibo.daysLate = 0
            recibo.finalPrice = recibo.PRICE
        }
    })
    buildList()
}
