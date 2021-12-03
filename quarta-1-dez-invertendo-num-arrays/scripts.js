// The chalange is not to use any built-in method to manipulate Strings
const array = [0,0,0,0]
let reversedArray = []

function start() {
    const pArray = document.querySelector('#array')
    array[0] = Number(document.querySelector('#m0').value)
    array[1] = Number(document.querySelector('#m1').value)
    array[2] = Number(document.querySelector('#m2').value)
    array[3] = Number(document.querySelector('#m3').value)
    pArray.innerHTML = array
}

function revertOrder() {
    start()
    const pReversed = document.querySelector('#reversed')
    reversedArray = [array[3], array[2], array[1], array[0]]
    pReversed.innerHTML = reversedArray    
}

function sortArray() {
    start()
    const pSorted = document.querySelector('#sorted')
    
    done = false
    while (!done) {
        done = true
        for (let i = 1; i < array.length; i++) {
            if (array[i-1] > array[i]) {
                done = false
                let holder = array[i-1]
                array[i-1] = array[i]
                array[i] = holder
            }
        }
    }
    pSorted.innerHTML = array
}