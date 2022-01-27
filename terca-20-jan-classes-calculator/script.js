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

const num1 = document.querySelector('#primeiro')
const num2 = document.querySelector('#segundo')
const sum = document.getElementById('sum')
const minus = document.getElementById('minus')
const times = document.getElementById('times')
const divide = document.getElementById('divide')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear-entry')
const result = document.querySelector('p')

num1.addEventListener('input', () => {
    myCalc.setOperand1(Number(num1.value))
})

num2.addEventListener('input', () => {
    myCalc.setOperand2(Number(num2.value))
})

sum.addEventListener('click', () =>  myCalc.setOperation('soma') )
minus.addEventListener('click', () =>  myCalc.setOperation('subtracao') )
times.addEventListener('click', () =>  myCalc.setOperation('multiplicacao') )
divide.addEventListener('click', () =>  myCalc.setOperation('divisao') )
equals.addEventListener('click', () => {
    result.innerHTML = myCalc.getResult()
})
clear.addEventListener('click', () =>  {
    result.innerHTML = 'RESULTADO'
    myCalc.clearCalculator()
    num1.value = ''
    num2.value = ''
} )