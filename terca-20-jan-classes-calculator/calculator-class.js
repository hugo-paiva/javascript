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

let myCalc = new Calculator(3, 8)
myCalc.clearCalculator()
myCalc.setOperation('multiplicacao')
console.log(myCalc.getResult())