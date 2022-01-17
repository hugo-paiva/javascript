function factorialByRecursion(_n) {
    let num = parseInt(_n)
    if (num == 1) {
        return num
    }
    return num * factorialByRecursion(num - 1)
}

console.log(factorialByRecursion(5))