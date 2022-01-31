function toInfinteAndBeyond(...args) {
    return args
}

console.log(toInfinteAndBeyond(1, 'mother', 3, 7, 'jensen ackles', 9, 7, 8))

// multiply Infinite number of arguments

function multiplyInfiniteArgs(_numbers) {
    const num = _numbers
    return num.reduce((acumulator, currentValue) => acumulator * currentValue)
}

// console.log(multiplyInfiniteArgs(numbers))

// another example of me trying this

function infinte(...args) {
    const aLotOfThings = args
    return aLotOfThings
}

console.log(infinte(1, 3, 7,))