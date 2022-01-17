function concatenate(_vetor1, _vetor2) {
    console.log([..._vetor1,..._vetor2])
}

const numbers = [1,3, 7,8]
const words = ['sink', 'mother', 'chair']

concatenate(numbers, words)