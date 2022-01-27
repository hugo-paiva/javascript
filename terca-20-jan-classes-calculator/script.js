class Calculator {
    constructor(operand1, operand2) {
        this.operand1 = operand1
        this.operand2 = operand2
    }

    setOperand1(_operand1) {
        this.operand1 = _operand1
    }

    setOperand2(_operand2) {
        this.operand2 = _operand2
    }

    setOperation(_operation) {
        if (_operation == 'soma') {
            this.operation = () => this.operand1 + this.operand2
        } else if (_operation == 'subtracao') {
            this.operation = () => this.operand1 - this.operand2
        } else if (_operation == 'divisao') {
            this.operation = () => this.operand1 / this.operand2
        } else if (_operation == 'multiplicacao') {
            this.operation = () => this.operand1 * this.operand2
        } else {
            throw 'Invalid operator. Try again with a diferent option'
        }
    }

    getResult() {
        return this.operation()
    }

    clearCalculator() {
        this.operand1 = 0
        this.operand2 = 0
        this.operation = ''
    }
}

let myCalc = new Calculator()
// Initializing numeric buttons 
const bttn1 = document.getElementById('bttn-1')
const bttn2 = document.getElementById('bttn-2')
const bttn3 = document.getElementById('bttn-3')
const bttn4 = document.getElementById('bttn-4')
const bttn5 = document.getElementById('bttn-5')
const bttn6 = document.getElementById('bttn-6')
const bttn7 = document.getElementById('bttn-7')
const bttn8 = document.getElementById('bttn-8')
const bttn9 = document.getElementById('bttn-9')
const bttn0 = document.getElementById('bttn-0')

// initializing operation buttons
const sumButton = document.getElementById('sum')
const minusButton = document.getElementById('minus')
const timesButton = document.getElementById('times')
const divideButton = document.getElementById('divide')
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear-entry')
const result = document.querySelector('p')

const visor = document.getElementById('visor')

let cacheVisor = ''

function updateCacheAndVisor(_num) {
    cacheVisor += _num
    visor.innerHTML = cacheVisor
}

function saveOperand1FromVisor() {
    myCalc.setOperand1(Number(cacheVisor))
    cacheVisor = ''
    visor.innerHTML = cacheVisor
}

bttn1.addEventListener('click', () => updateCacheAndVisor(1))

bttn2.addEventListener('click', () => updateCacheAndVisor(2))

bttn3.addEventListener('click', () => updateCacheAndVisor(3))

bttn4.addEventListener('click', () => updateCacheAndVisor(4))

bttn5.addEventListener('click', () => updateCacheAndVisor(5))

bttn6.addEventListener('click', () => updateCacheAndVisor(6))

bttn7.addEventListener('click', () => updateCacheAndVisor(7))

bttn8.addEventListener('click', () => updateCacheAndVisor(8))

bttn9.addEventListener('click', () => updateCacheAndVisor(9))

bttn0.addEventListener('click', () => updateCacheAndVisor(0))

sumButton.addEventListener('click', () =>  {
    saveOperand1FromVisor()
    myCalc.setOperation('soma')
} )

minusButton.addEventListener('click', () =>  {
    saveOperand1FromVisor()
    myCalc.setOperation('subtracao')
} )

timesButton.addEventListener('click', () =>  {
    saveOperand1FromVisor()
    myCalc.setOperation('multiplicacao')
} )

divideButton.addEventListener('click', () =>  {
    saveOperand1FromVisor()
    myCalc.setOperation('divisao')
} )

equalsButton.addEventListener('click', () => {
    myCalc.setOperand2(Number(cacheVisor))
    cacheVisor = ''
    visor.innerHTML = cacheVisor
    result.innerHTML = myCalc.getResult()
})

clearButton.addEventListener('click', () =>  {
    result.innerHTML = 'RESULTADO'
    myCalc.clearCalculator()
} )