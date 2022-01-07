function criarMultiplicador(num) {
    const multiplicador = num
    function multiplique(newInput) {
        return multiplicador * newInput
    }
    return multiplique
}

let multipliquePor3 = criarMultiplicador(3)

console.log(multipliquePor3(10))

console.log(multipliquePor3(50))

