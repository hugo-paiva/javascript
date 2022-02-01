const calculator = (operand1, operand2, _typeOfOperation) => ({
    operand1,
    operand2,
    _typeOfOperation,

    setOperand1(_operand1) {
        this.operand1 = _operand1
    },

    setOperand2(_operand2) {
        this.operand2 = _operand2
    },

    setOperation(_typeOfOperation) {
        this.typeOfOperation = _typeOfOperation
        if (this.typeOfOperation == 'soma') {
            this.operation = () => this.operand1 + this.operand2
        } else if (this.typeOfOperation == 'subtracao') {
            this.operation = () => this.operand1 - this.operand2
        } else if (this.typeOfOperation == 'divisao') {
            this.operation = () => this.operand1 / this.operand2
        } else if (this.typeOfOperation == 'multiplicacao') {
            this.operation = () => this.operand1 * this.operand2
        } else {
            throw 'Invalid operator. Try again with a diferent option'
        }
    },

    getResult() {
        return this.operation()
    },

    clearCalculator() {
        this.operand1 = 0
        this.operand2 = 0
        this.operation = ''
    }
})

module.exports = calculator 