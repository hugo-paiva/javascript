let array = [0,0,0,0]
let reversedArray = []
let sorted = []

function start() {
    let pArray = document.querySelector('#array')
    array[0] = document.querySelector('#m0').value
    array[1] = document.querySelector('#m1').value
    array[2] = document.querySelector('#m2').value
    array[3] = document.querySelector('#m3').value
    pArray.innerHTML = array
}

function revertOrder() {
    start()
    let pReversed = document.querySelector('#reversed')
    reversedArray = [array[3], array[2], array[1], array[0]]
    pReversed.innerHTML = reversedArray    
}

function sortArray() {
    start()
    let pSorted = document.querySelector('#sorted')
    
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