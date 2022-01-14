matrix = [
    [1,3,7],
    [9,3,4],
    [8,7,9]
]

function printMatrix(_matrix) {
    let mtx = _matrix
    console.log(mtx[0])
    mtx.shift()
    if (mtx.length == 0) {
        return
    }
    return  printMatrix(mtx)
}

printMatrix(matrix)