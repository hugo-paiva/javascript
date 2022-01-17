function maximumDraw() {
    const allNumbers = []
    for (let i = 0; i < 10; i++) {
        allNumbers.push(Math.floor(Math.random() * 100))
    }
    console.log(`The entire list is ${allNumbers}.`)
    console.log(allNumbers)
    return `O maior valor sorteado foi ${Math.max(...allNumbers)}.`
}

console.log(maximumDraw())