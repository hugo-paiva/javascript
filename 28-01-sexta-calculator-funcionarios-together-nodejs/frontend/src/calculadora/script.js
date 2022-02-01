// initializing operation buttons
const sumButton = document.getElementById('sum')
const minusButton = document.getElementById('minus')
const timesButton = document.getElementById('times')
const divideButton = document.getElementById('divide')
const equalsButton = document.getElementById('equals')
const allClearButton = document.getElementById('all-clear')
const result = document.querySelector('p')

const visor = document.getElementById('visor')

let cacheVisor = ''
let operand1 = ''
let operation = ''
let operand2 = ''

// Initializing numeric buttons and adding click event
document.querySelectorAll('.num-button').forEach(button => {
    button.addEventListener('click', () => {
        updateCacheAndVisor(button.innerHTML)
    })
})

function updateCacheAndVisor(_num) {
    cacheVisor += _num
    visor.innerHTML = cacheVisor
}

function saveOperand1FromVisor() {
    operand1 = cacheVisor
    cacheVisor = ''
    visor.innerHTML = cacheVisor
}

sumButton.addEventListener('click', () => {
    saveOperand1FromVisor()
    operation = 'soma'
})

minusButton.addEventListener('click', () => {
    saveOperand1FromVisor()
    operation = 'subtracao'
})

timesButton.addEventListener('click', () => {
    saveOperand1FromVisor()
    operation = 'multiplicacao'
})

divideButton.addEventListener('click', () => {
    saveOperand1FromVisor()
    operation = 'divisao'
})

equalsButton.addEventListener('click', () => {
    operand2 = cacheVisor
    const apiUrl = `http://localhost:3000/calculate/${operand1}/${operation}/${operand2}`
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            cacheVisor = data
            visor.innerHTML = cacheVisor
        })
})

allClearButton.addEventListener('click', () => {
    myCalc.clearCalculator()
    cacheVisor = ''
    visor.innerHTML = ''
})