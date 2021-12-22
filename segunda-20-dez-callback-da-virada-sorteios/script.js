const drawButton = document.querySelector('button')
const result = document.querySelector('ul')
let allNumbers
drawButton.addEventListener('click', drawNumbers)

function drawNumbers() {
    drawButton.disabled = true
    allNumbers = []
    result.innerHTML = ''
    let count = 0
    while (count < 6) {
        let temp = Math.ceil(Math.random() * 60)
        if (allNumbers.includes(temp)) {
            continue
        } else {
            allNumbers.push(temp)
            count++
        }
    }
    // console.log(allNumbers.sort((a,b) => a-b))
    printNumbers()
}

function printNumbers() {
    let i = 0
    setInterval(printItem, 1000);
    function printItem() {
        if (i == allNumbers.length) {
            clearInterval()
        } else {
            let node = document.createElement('li')
            node.innerText = allNumbers[i]
            result.appendChild(node)
            i++
        }
    }
    drawButton.disabled = false
}